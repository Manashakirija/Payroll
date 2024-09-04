import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './User.css'
const User = () => {
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3002/Employees')
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  return (
    <div className='class3'>
      <h3>User Page</h3>
      <br></br>
      <div className="flex-container">  
        {post.map(x=>(
          <div className="flex-items">
            <img src={x.image} width={150} height={150}/>
            <h1>{x.Name}</h1>
            <p>{x.Age}</p>
            <p>{x.Role}</p>
            <p>{x.Salary}</p>
            <p>{x.Experience}</p>
            <button className='button1'>Visit Profile</button>
            </div>
        ))}
        </div>
        </div>
  )
}

export default User
