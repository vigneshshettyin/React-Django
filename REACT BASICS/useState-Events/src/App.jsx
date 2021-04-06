import React, { useState } from 'react'

import './index.css'
const App = () =>
{
    const[style, isStyled]=useState('purple')
    const[name, isNamed]=useState("Hello World! ✋")

    let iClicked = () =>{
        isStyled('yellow')
        isNamed("Wow!!! 🥇")
    }

    let iiClicked = () =>{
        isStyled('purple')
        isNamed("2nd Place 🥈")
    }

    return(
        <>
        <div style={{backgroundColor: style}}>
        <button onClick={iClicked} onDoubleClick={iiClicked} >{name}</button>
        </div>
        </>
    )
}

export default App