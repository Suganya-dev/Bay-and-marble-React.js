import React from 'react';

export const Home = ({user}) =>{

    const bakers = ["Anita","asha","max","jack"]
    return (
        <>
        <h1>Welcome to Doughtnut shop,{user.name}</h1>
        <p>We fry doughnuts with love</p>
        <h2>Our bakers</h2>
        <ul>
            {bakers.map((baker,i) => <li key ={i}>{baker}</li>)}
        </ul>
        </>
    )
}