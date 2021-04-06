import React, { useState } from 'react'

import './index.css'


const App = ()=>{

    let presTime = new Date().toLocaleTimeString()
    const[time, curTime]=useState(presTime)

    const getTime = ()=>{
        presTime = new Date().toLocaleTimeString()
        curTime(presTime)
    }

    return<>

    <div>
        <h1><span>Time:</span>{time}</h1>
        <button onClick={getTime}>Get Time</button>
    </div>
    </>
}

export default App