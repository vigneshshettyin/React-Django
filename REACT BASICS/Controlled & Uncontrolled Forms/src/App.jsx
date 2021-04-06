import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = ()=>{

    const[name, setName] = useState();

    const[getN , setN] = useState();

    const getName = (event) =>{
        setName(event.target.value)
    }

    const submitted = ()=>{
        setN(name)
    }

    return(
        <>
        <div>
        <h1 className='text-capitalize text-center mt-3'>Hey, Welcome {getN} 🔆</h1>
    <center> 
        <input onChange={getName} className="form-control" type="text" placeholder="Enter your name" value={name} required/><br/>
        <button onClick={submitted} className='btn btn-outline-primary' >Click Me! 🧑‍🚀</button></center>
    </div>
        </>
    )
}

export default App