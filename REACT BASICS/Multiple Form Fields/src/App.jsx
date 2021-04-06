import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const App = ()=>
{

    const[values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

    const changeValue = (event)=>{
        const value = event.target.value
        const name = event.target.name

        // console.log(value, name)
        
        setValues((prev)=>{
            if(name==='name'){
                return{
                    name : value,
                    email : prev.email,
                    password : prev.password
                }
            }
            else if(name==='email'){
                return{
                    name : prev.name,
                    email : value,
                    password : prev.password
                }
            }
            else if(name==='password'){
                return{
                    name : prev.name,
                    email : prev.email,
                    password : value
                }
            }

        })

    }

    const Submitted = (event) =>
    {
        event.preventDefault()
        alert(`Hey, ${values.name} your logged in successfully!`)
    }

    return(
        <>
        <div className="container maincont">
        <div class="row">
    <div className="col-md-6 offset-md-3">
        <h5>💨 Name : {values.name}, Email : {values.email}, Password : {values.password}</h5>

    <form onSubmit={Submitted}>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input value={values.name} onChange={changeValue} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input value={values.email} onChange={changeValue} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input value={values.password} onChange={changeValue} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  </div>    
        </div>
        </>
    )
}

export default App;