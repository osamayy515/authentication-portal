import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import login3 from './login3.png'
import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';


function App() {
  const[User,setUser] = useState('')
  const[Pass,setPass] = useState('')

  const handleValidate=(e)=>{
    e.preventDefault()
    if(User =='osamasaleem@gmail.com' && Pass == 123456)
      swal("Succesful Login","Welcome Osama","success")
    else
      swal("Wrong Credentials","Please try again","error")  
  }

  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <br/>
      <div className='row'>
        <div className='col-md-6'>
          <img className='float-right' src={login3} alt='' width="350"/>
        </div>
        <div className='col-md-6 my-auto p-5'>
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" value={User} className="form-control" placeholder='Enter email' onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" value={Pass} className="form-control" placeholder='Enter password' onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
