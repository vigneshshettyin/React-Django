import React, { useState } from 'react'

import './index.css'


const App = ()=>{

    let presTime = new Date().toLocaleTimeString()
    const[time, curTime]=useState(presTime)

    const updateTime = ()=>{
        const cur2Time = new Date().toLocaleTimeString()
        curTime(cur2Time)
    }

    setInterval(updateTime, 1000)
    return<>

    <div>
        <h1>{time}</h1>
    </div>
    </>
}

export default App