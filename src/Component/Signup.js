import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signup = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post('http://localhost:3001/Users',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='class2'>
      <h1>Signup Page</h1>
        <form className='form3' onSubmit={handleSignup}>
            <label>Username</label>
            <input className='i2' type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>Email</label>
            <input className='i2' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>Password</label>
            <input className='i2' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            <br></br>
            <button className='btn1' type='submit'>Signup</button>
            <br></br>
            <br></br>
            <Link to="/login">Already have an account?Log in</Link>
        </form>
    </div>
  )
}

export default Signup