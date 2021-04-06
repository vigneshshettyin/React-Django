import React, { useState } from 'react'
import './index.css'

const App = ()=>{
    const[count, setCount]= useState(0);

    const Incl = ()=>{
        setCount(count+1)
    }


    return <>
    <div>
    <h1><span>Counter:</span> {count}</h1>
    <button onClick={Incl}>Click Here</button>
    </div>
    </>
}

export default App