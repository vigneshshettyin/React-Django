import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = ()=>{

    const[name, setName] = useState();

    const[password , setPassword] =useState();


    const[getN , setN] = useState();

    const[getP , setP] = useState();

    const getName = (event) =>{
        setName(event.target.value)
    }

    const getPassword = (event) =>{
        setPassword(event.target.value)
    }

    const submitted = (event)=>{
        event.preventDefault();
        setN(name)
        setP(password)
    }

    return(
        <>
        <div>
        <h1 className='text-capitalize text-center mt-3'>Hey, Welcome {getN} & Password is {getP}🔆</h1>
        <form onSubmit={submitted}>
  <div className="mb-3 babse">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={getName} value={name} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={getPassword} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit 💯</button>
</form>
    </div>
        </>
    )
}

export default App