module Sveltish.Bindings

open Transition
open DOM
open Browser.Types
open Browser.Dom
open System

let log s = Logging.log "bind" s

let bindId = Helpers.makeIdGenerator()

let nodeStr (node : Node) =
    match node.nodeType with
    | DOM.ElementNodeType ->
        let e = node :?> HTMLElement
        $"<{e.tagName.ToLower()}>"
    | DOM.TextNodeType ->
        $"\"{node.textContent}\""
    | _ -> $"?{node.textContent}"

let makeAppendChild (ctx:BuildContext) (parent:Node) (current:Node) = fun p c ->
    if (isNull current || not (parent.isSameNode(p))) then
        // Appending new child
        log($"Appending new child id {svId c} to {svId p} '{nodeStr c}'")
        ctx.AppendChild p c |> ignore
    else
        if isNull current.parentElement then
            // This means our node was replaced, which can happen if anything else is working on our DOM
            // It only matters where we're managing an existing node through a binding or each construct.
            for foreignNode in children p |> List.filter (not << DOM.hasSvId) do
                p.removeChild(foreignNode) |> ignore

            log($"Append missing child: re-id from {svId c} -> {svId current}")
            svId current |> setSvId c

            ctx.AppendChild p c |> ignore
        else
            // Consider when this bind is a child of an each block - "each" tracks the nodes it has
            // created. This allows each to find the replacement node
            log($"Replace child: re-id from {svId c} -> {svId current}")
            svId current |> setSvId c

            ctx.ReplaceChild p c current |> ignore
    c

let bind<'T>  (store : IObservable<'T>)  (element: 'T -> NodeFactory) = fun (ctx,parent) ->
    let mutable node : Node = null
    let mutable value : 'T = Unchecked.defaultof<_>

    let unsub = Store.subscribe store ( fun next ->
        if not (Helpers.fastEquals value next) then
            node <- buildSolitary (element(next)) { ctx with AppendChild = (makeAppendChild ctx parent node) } parent
            value <- next
    )

    DOM.registerDisposable parent unsub
    unitResult()

let bind2<'A,'B>  (a : IObservable<'A>) (b : IObservable<'B>)  (element: ('A*'B) -> NodeFactory) = fun (ctx,parent) ->
    let mutable node : Node = null
    let mutable value : ('A*'B) = Unchecked.defaultof<_>

    let unsub = Store.subscribe2 a b (fun next ->
        if not (Helpers.fastEquals value next) then
            node <- buildSolitary (element next) { ctx with AppendChild = (makeAppendChild ctx parent node) } parent
            value <- next
    )

    DOM.registerDisposable parent unsub
    unitResult()

let getInputChecked el = Interop.get el "checked"
let setInputChecked (el : Node) (v:obj) = Interop.set el "checked" v
let getInputValue el : string = Interop.get el "value"
let setInputValue el (v:string) = Interop.set el "value" v

let bindSelect<'T when 'T : equality> (store:Store<'T>) = fun (ctx:BuildContext,parent:Node) ->

    let select = parent :?> HTMLSelectElement
    let op (coll:HTMLCollection) i = coll.[i] :?> HTMLOptionElement
    let opValue op : 'T = Interop.get op "__value"

    let getValue() =
        let selOps = select.selectedOptions
        opValue selOps.[0]
        //[0..selOps.length-1] |> List.map (fun i -> opValue (op selOps i))

    let updateSelected (v : 'T) =
        for i in [0..select.options.length-1] do
            let o = select.options.[i] :?> HTMLOptionElement
            o.selected <- (v = (opValue o))

    // Update the store when the radio box is clicked on
    let unsubInput = parent.addEventListener("input", (fun _ ->
        //log($"%A{getValueList()}")
        getValue() |> Store.set store
    ))

    // We need to finalize checked status after all attrs have been processed for input,
    // in case 'value' hasn't been set yet
    let unsubOneShot = listenOneShot Event.ElementReady parent <| fun () ->
        store |> Store.get |> updateSelected

    // When store changes make sure check status is synced
    let unsub = Store.subscribe store updateSelected

    unitResult()

let bindSelectMultiple<'T when 'T : equality> (store:Store<List<'T>>) = fun (ctx:BuildContext,parent:Node) ->

    let select = parent :?> HTMLSelectElement
    let op (coll:HTMLCollection) i = coll.[i] :?> HTMLOptionElement
    let opValue op : 'T = Interop.get op "__value"

    let getValueList() =
        let selOps = select.selectedOptions
        [0..selOps.length-1] |> List.map (fun i -> opValue (op selOps i))

    let updateSelected (v : List<'T>) =
        for i in [0..select.options.length-1] do
            let o = select.options.[i] :?> HTMLOptionElement
            o.selected <- v |> List.contains (opValue o)

    // Update the store when the radio box is clicked on
    let unsubInput = parent.addEventListener("input", (fun _ ->
        //log($"%A{getValueList()}")
        getValueList() |> Store.set store
    ))

    // We need to finalize checked status after all attrs have been processed for input,
    // in case 'value' hasn't been set yet
    let unsubOneShot = listenOneShot Event.ElementReady parent <| fun () ->
        store |> Store.get |> updateSelected

    // When store changes make sure check status is synced
    let unsub = Store.subscribe store (updateSelected)

    unitResult()

let isNullString (obj:obj) =
    isNull obj || System.String.IsNullOrEmpty(downcast obj)

let getId (s : IStore<'T>) = s.GetHashCode()

let bindGroup<'T> (store:Store<List<string>>) = fun (ctx:BuildContext,parent:Node) ->
    let name = match Interop.get parent "name" with
                | s when isNullString s -> $"store-{getId store}"
                | s -> s

    // Group this input with all other inputs that reference the same store
    Interop.set parent "name" name

    let getValueList() =
        let inputs = parent.ownerDocument.querySelectorAll(@$"input[name=""{name}""]")
        [0..(inputs.length-1)] |> List.map (fun i -> inputs.[i]) |> List.filter getInputChecked |> List.map getInputValue

    let updateChecked (v : List<string>) =
        setInputChecked parent ( v |> List.contains (getInputValue parent) )

    // Update the store when the radio box is clicked on
    let unsubInput = parent.addEventListener("input", (fun _ ->
        //log($"%A{getValueList()}")
        getValueList() |> Store.set store
    ))

    // We need to finalize checked status after all attrs have been processed for input,
    // in case 'value' hasn't been set yet
    let unsubOneShot = listenOneShot Event.ElementReady parent <| fun () ->
        store |> Store.get |> updateChecked

    // When store changes make sure check status is synced
    let unsub = Store.subscribe store (updateChecked)

    unitResult()


// T can realistically only be numeric or a string. We're relying (I think!) on JS's ability
// to turn a string into an int automatically in the Store.set call (maybe it's Fable doing that)
//
let bindRadioGroup<'T> (store:Store<'T>) = fun (ctx:BuildContext,parent:Node) ->
    let name = match Interop.get parent "name" with
                | s when isNullString s -> $"store-{getId store}"
                | s -> s
    // Group this input with all other inputs that reference the same store
    Interop.set parent "name" name

    let updateChecked (v : obj) =
        setInputChecked parent ( (string v) = getInputValue parent )

    // Update the store when the radio box is clicked on
    let inputUnsub = listen "input" parent (fun _ -> Interop.get parent "value" |> Store.set store )

    // We need to finalize checked status after all attrs have been processed for input,
    // in case 'value' hasn't been set yet
    let oneShotUnsub = listenOneShot Event.ElementReady parent <| fun () ->
        store |> Store.get |> updateChecked

    // When store changes make sure check status is synced
    let unsub = Store.subscribe store updateChecked

    unitResult()

// Bind a store value to an element attribute. Updates to the element are unhandled
let bindAttrIn<'T> (attrName:string) (store : IObservable<'T>) = fun (ctx:BuildContext,parent:Node) ->
    let unsub = Store.subscribe store ( fun value -> Interop.set parent attrName value )
    unitResult()

// Bind a scalar value to an element attribute. Listen for onchange events and dispatch the
// attribute's current value to the given function. This form is useful for view templates
// where v is invariant (for example, an each that already filters on the value of v, like Todo.Done)
let attrNotify<'T> (attrName:string) (v :'T) (onchange : obj -> unit)= fun (ctx:BuildContext,parent:Node) ->
    let unsub = listen "input" parent (fun _ -> Interop.get parent attrName |> onchange )
    Interop.set parent attrName v
    unitResult()

// Bind a store value to an element attribute. Listen for onchange events and dispatch the
// attribute's current value to the given function
let bindAttrNotify<'T> (attrName:string) (store : Store<'T>) (onchange : obj -> unit)= fun (ctx:BuildContext,parent:Node) ->
    parent.addEventListener("input", (fun _ -> Interop.get parent attrName |> onchange ))
    let unsub = Store.subscribe store ( Interop.set parent attrName )
    unitResult()

// Bind a store value to an element attribute. Listen for onchange events write the converted
// value back to the store
let bindAttrConvert<'T> (attrName:string) (store : Store<'T>) (convert : obj -> 'T)= fun (ctx:BuildContext,parent:Node) ->
    //let attrName' = if attrName = "value" then "__value" else attrName
    parent.addEventListener("input", (fun _ -> Interop.get parent attrName |> convert |> Store.set store ))
    let unsub = Store.subscribe store ( Interop.set parent attrName )
    unitResult()

// Unsure how to safely convert Element.getAttribute():string to 'T
let convertObj<'T> (v:obj) : 'T  =
    v :?> 'T

// Bind a store to an attribute in both directions
let bindAttr<'T> (attrName:string) (store : Store<'T>) =
    bindAttrConvert attrName store convertObj<'T>

let bindAttrOut<'T> (attrName:string) (store : Store<'T>) = fun (ctx:BuildContext,parent:Node) ->
    let unsub = DOM.listen "input" parent (fun _ -> Interop.get parent attrName |> convertObj<'T> |> Store.set store)
    //(asEl parent).addEventListener("input", (fun _ -> Interop.get parent attrName |> convertObj<'T> |> Store.set store ))
    unitResult()


let attrIsSizeRelated  (attrName:string) =
    let upr = attrName.ToUpper()
    upr.IndexOf("WIDTH") >= 0 || upr.IndexOf("HEIGHT") >= 0

let bindPropOut<'T> (attrName:string) (store : Store<'T>) = fun (ctx,parent) ->
    let notify() = Interop.get parent attrName |> convertObj<'T> |> Store.set store

    let unsub =
        if attrIsSizeRelated attrName then
            (getResizer (asEl parent)).Subscribe( notify ) |> Helpers.unsubify
        else
            DOM.listen "input" parent (fun _ -> notify())

    DOM.registerUnsubscribe parent unsub

    unitResult()

type KeyedItem<'T,'K> = {
    Key : 'K
    Node : Node
    SvId : int
    Position : int
    Rect: ClientRect
}

let eachik (items:IObservable<list<'T>>) (view : int -> 'T -> NodeFactory)  (key:'T -> 'K) (trans : TransitionAttribute option) =
    fun (ctx,parent) ->
        let mutable state : KeyedItem<'T,'K> list = []
        let unsub = Store.subscribe items (fun value ->

            let findNode (current:Node) (id:int) =
                if (isNull current.parentNode) then
                    log($"each: Node {id} was replaced - finding new one")
                    match DOM.findNodeWithSvId id with
                    | None ->
                        log("each: Disaster: cannot find node")
                        null
                    | Some n ->
                        log($"each: Found it: {n}")
                        n
                else
                    current

            log("-- Each Block Render -------------------------------------")
            log($"each: caching exist rects for render {state.Length} items")

            state <- state |> List.map (fun ki ->
                let node = findNode ki.Node ki.SvId
                { ki with Node = node; Rect = clientRect node })

            let newItems = value //|> List.filter filter
            log($"each: rendering {newItems.Length} items")
            log($"each: parent is {svId parent}")

            let mutable newState  = [ ]
            let mutable enteringNodes = []

            let blockPrevNode = // First node before this collection
                match state with
                | [] -> null
                | x::xs -> x.Node.previousSibling

            // I bet I can do all this in one pass, I will come back to this
            // and improve it. Let's get it working first.

            newItems |> List.mapi (fun itemIndex item ->
                let itemKey = key item
                let optKi = state |> List.tryFind (fun x -> x.Key = itemKey)
                match optKi with
                | None ->
                    log($"Building item {itemIndex} {item}")
                    let itemNode = buildSolitary (view itemIndex item) ctx parent // Item appears, maybe in wrong place
                    log($"Item built {nodeStr itemNode}")
                    transitionNode (itemNode :?> HTMLElement) trans [Key (string itemKey)] true ignore
                    let newKi = {
                        SvId = svId itemNode
                        Key = itemKey
                        Node = itemNode
                        Position = itemIndex
                        Rect = clientRect itemNode
                    }
                    newState <- newState @ [ newKi ]
                    enteringNodes <- newKi :: enteringNodes
                | Some ki ->
                    let r = (ki.Node :?> HTMLElement).getBoundingClientRect()
                    newState <- newState @ [ { ki with Position = itemIndex; Rect = r } ]
            ) |> ignore

            // Remove old items
            for oldItem in state do
                if not (newState |> List.exists (fun x -> x.Key = oldItem.Key)) then
                    log($"each: removing key {oldItem.Key}")
                    fixPosition (asEl oldItem.Node)
                    transitionNode (asEl oldItem.Node) trans [Key (string oldItem.Key)] false
                        removeNode

            // Existence is now synced. Now to reorder

            let wantAnimate = true
            let mutable last = blockPrevNode
            newState |> List.mapi (fun pos ki ->
                // Can only re-order this way when all exiting nodes have been removed
                //if pos <> ki.Position then
                //    parent.removeChild(ki.Node) |> ignore
                //    parent.insertBefore(ki.Node, last.nextSibling) |> ignore
                if wantAnimate && not (enteringNodes |> List.exists (fun en -> en.Key = ki.Key)) then
                    animateNode (ki.Node :?> HTMLElement) (ki.Rect)
                last <- ki.Node
                ()
            ) |> ignore

            state <- newState
        )
        unitResult()
//        parent :> Node

//let eachio (items:IObservable<list<'T>>) (view : IObservable<int> -> IObservable<'T> -> NodeFactory) (trans : TransitionAttribute option) =
//    eachiko items view (fun v -> v.GetHashCode()) trans

let eachi (items:IObservable<list<'T>>) (view : int -> 'T -> NodeFactory) (trans : TransitionAttribute option) =
    eachik items view (fun v -> v.GetHashCode()) trans

let each (items:IObservable<list<'T>>) (view : 'T -> NodeFactory) (trans : TransitionAttribute option) =
    eachik items (fun _ item -> view item) (fun v -> v.GetHashCode()) trans

//let eachik (items:IObservable<list<'T>>) (view : (int * 'T) -> NodeFactory)  (key:'T -> 'K) (trans : TransitionAttribute option) =
//    eachik items (fun indexS todoS -> bind2 indexS todoS view) key trans

let eachk (items:IObservable<list<'T>>) (view : 'T -> NodeFactory)  (key:'T -> 'K) (trans : TransitionAttribute option) =
    eachik items (fun _ item -> view item) key trans

let (|=>) a b = bind a b