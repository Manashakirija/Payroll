import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Admin from './Component/Admin';
import User from './Component/User';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Profile from './Component/Profile';
import { Auth } from './Component/Auth';

function App() {
  return (
    <div className="App">
    <Auth>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
     </Routes>
     </Auth>
    </div>
  );
}

export default App;
