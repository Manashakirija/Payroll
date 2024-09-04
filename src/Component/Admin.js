import React,{useState,useEffect} from 'react'
import './Admin.css'
import axios from 'axios'
const Admin = () => {
    const[post,setPost]=useState([])
    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[role,setRole]=useState('')
    const[salary,setSalary]=useState(0)
    const[experience,setExperience]=useState(0)
    const[image,setImage]=useState('')
    useEffect(()=>
    {
        axios.get('http://localhost:3002/Employees')
        .then(res=>{setPost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handleSubmit=()=>
    {
        axios.post('http://localhost:3002/Employees',{
            "Name":name,"Age":age,"Role":role,"Salary":salary,"Experience":experience})
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
    }
    const handleDelete=(name)=>
    {
        axios.delete(`http://localhost:3002/Employees/${name}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})  
    }
    const[popup,setPopup]=useState([])
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState(0)
    const[role1,setRole1]=useState('')
    const[salary1,setSalary1]=useState(0)
    const[experience1,setExperience1]=useState(0)
    const openPopup=(datas)=>{
        setPopup(true)
        setName1(datas.name)
        setAge1(datas.age)
        setRole1(datas.role)
        setSalary1(datas.salary)
        setExperience1(datas.experience)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3002/Employees/${name}`,{
          "Name":name1,"Age":age1,"Role":role1,"Salary":salary1,"Experience":experience1})
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})

        }
  return (
    <div className='class1'>
      <h3>Admin Page</h3>
      <br></br>
      <div className='container5'>
        <form className="form1" onSubmit={handleSubmit}>
        <br></br>
        <label>EmployeeName</label>
        <input type='text' value={name} onChange={(e)=>setName (e.target.value)}/>
        <br></br>
        <label>Age</label>
        <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br></br>
        <label>Role</label>
        <input type='text' value={role} onChange={(e)=>setRole(e.target.value)}/>
        <br></br>
        <label>Salary</label>
        <input type='text' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
        <br></br>
        <label>Experience</label>
        <input type='text' value={experience} onChange={(e)=>setExperience(e.target.value)}/>
        <br></br>
        <label>Image</label>
        <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
        <br></br>
        <button type='submit'>submit</button>
        <br></br>
        <br></br>
      </form>
      <table>
        <thead>
            <tr>
                <th>EmployeeName</th>
                <th>Age</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Experience</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {post.map(x=>(
                <tr>
                    <td>{x.Name}</td>
                    <td>{x.Age}</td>
                    <td>{x.Role}</td>
                    <td>{x.Salary}</td>
                    <td>{x.Experience}</td>
                   <td>
                    <button className='bt2' onClick={()=>openPopup(x)}>Update</button>
                    <button className='bt2' onClick={()=>handleDelete(x.name)}>Delete</button>
                    </td>
                </tr>  
            ))}
        </tbody>
      </table>
      <br></br> 
      <br></br>
      {
        popup && <div className='Popup'> <form className='form2' onSubmit={handleUpdate}>
            <button className='bt1' onClick={()=>{setPopup(false)}}>x</button>
            <br></br>
            <br></br>
            <label className='lb1'>EmployeeName</label>
            <input className='i1' type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <br></br>
            <label className='lb1'>Age</label>
            <input className='i1' type='number' value={age1} onChange={(e)=>setAge1(e.target.value)}/>
            <br></br>
            <label className='lb1'>Role</label>
            <input className='i1' type='text' value={role1} onChange={(e)=>setRole1(e.target.value)}/>
            <br></br>
            <label className='lb1'>Salary</label>
            <input className='i1' type='number' value={salary1} onChange={(e)=>setSalary1(e.target.value)}/>
            <br></br>
            <label className='lb1'>Experience</label>
            <input className='i1' type='number' value={experience1} onChange={(e)=>setExperience1(e.target.value)}/>
            <br></br>
            <button className='bt1'type='submit'>Submit</button>
        </form>
       </div>

        }
        <br></br>
        <br></br>
    </div>
    </div>
  );
}
export default Admin
