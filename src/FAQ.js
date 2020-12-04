import React from'react'

export const FAQ = () =>{
    const faqs = [
        {
            id:1,
            ques: "How are you?",
            ans: "I am doing good"
        },
        {
            id:2,
            ques: "How are you?",
            ans: "I am doing good"
        },
        {
            id:3,
            ques: "How are you?",
            ans: "I am doing good"
        }
    ]
    return (
        <>
        <h1> Frequently asked questions</h1>
        {faqs.map(faq => <div key={faq.id} >
            <h2>{faq.ques}</h2>
            <p> {faq.ans}</p>
        </div>)}
        </>
    )
}