module ReactiveDeclarations

open Sveltish
open Sveltish.Stores
open Sveltish.Attr
open Sveltish.DOM
open Sveltish.Bindings

let count = makeStore(1);

let doubled = count |> storeMap ((*) 2)

// Using an operator instead of storeMap
let quadrupled = doubled |%> ((*)2);

let handleClick _ =
    count.Set( count.Value() + 1 )
    // Alternatively with operator:
    //    count <~= fun v -> v + 1
    // Or even:
    //    count <~= (+) 1

let view() =
    Html.div [
        Html.button [
            onClick handleClick
            bind count (fun n -> text $"Count: {n}")
            // Alternative with operator:
            //    count |-> (fun n -> text $"Count: {n}")
        ]

        Html.p [
            bind2 count doubled
                (fun (c,d) -> text $"{c} * 2 = {d}")
        ]

        Html.p [
            bind2 doubled quadrupled
                (fun (d,q) -> text $"{d} * 2 = {q}")
        ]
    ]