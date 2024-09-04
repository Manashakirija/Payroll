import React , {useState,useEffect } from 'react'
import { useAuth } from './Auth'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
// import cherry from './che.jpg';
const Login = () => {
    const navigate=useNavigate()
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[userlist,setUserlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/Users')
        .then(res=>setUserlist(res.data))
        .catch(err=>console.log(err))
    },[])
    const auth=useAuth()
    const handleLogin=()=>{
        const userExist=userlist.some(u=>u.username===username && u.password===password)
        if(userExist){
            auth.login(username)
            navigate('/')
        }
        else{
            alert("Invalid username or password")
        }
    }
  return (
    // <div style={{
    //     backgroundImage:`url(${cherry})`, 
    //     backgroundSize:'cover', 
    //     backgroundRepeat:'no-repeat', 
    //     height:'90vh', 
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center'
    // }}>
    <div className='class2'>
        <h1>Login Page</h1>
      <form className='form3' onSubmit={handleLogin}>
            <label>Username</label>
            <input className='i2' type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>Password</label>
            <input className='i2' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            <br></br>
            <button className='btn1' type='submit'>Login</button>
            <br></br>
            <br></br>
            <Link to="/signup">Don't have an account?Signup</Link>
        </form>
    </div>
    // </div>
  )
}

export default Login