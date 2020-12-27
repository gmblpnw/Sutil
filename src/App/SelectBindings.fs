module SelectBindings

open Browser
open Sveltish
open Sveltish.DOM
open Sveltish.Attr
open Sveltish.Styling

type Question = {
    Id : int
    Text : string
}

let questions = [
    { Id = 1; Text = "How much water have you drunk today?" }
    { Id = 2; Text = "When did you last take a break?" }
    { Id = 3; Text = "Do you plan to go for a walk later?" }
];

let answer   = Store.make("")
let selected = Store.make( questions |> List.head )

let handleSubmit (e : Types.Event) =
    e.preventDefault()
    let a = Store.get answer
    let q = Store.get selected
    window.alert($"Answered question {q.Id} ({q.Text}) with '{a}'");

let appStyle = [
    rule "input" [
        addClass "input"
        display "block"
        width "620px"
        maxWidth "100%"
    ]
    rule "button" [ addClass "button" ]
    rule "form" [ addClass "block" ]
    rule "h2" [ addClass "title"; addClass "is-2" ]
]

// HTML helpers
let block children =
    Html.div <| (class' "block") :: children

let view() =
    Html.div [

        Html.h2 [ text "Health Check" ]

        Html.form [
            on "submit" handleSubmit

            Html.div [
                class' "select block"
                Html.select [
                    Bindings.bindSelect selected
                    on "change" (fun _ -> Store.set answer "")
                    for question in questions do
                        Html.option [
                            value question
                            text question.Text
                        ]
                ]
            ]

            block [
                Html.input [
                    type' "text"
                    Bindings.bindAttr "value" answer
                ]
            ]

            block [
                Html.button [
                    Bindings.bindAttrIn "disabled" (answer |> Store.map (fun a -> a = ""))
                    type' "submit"
                    text "Submit"
                ]
            ]
        ]

        block [
            Bindings.bind selected <| fun q ->
                Html.p [
                    text $"Selected question {q.Id}"
                ]
        ]
    ] |> style appStyle