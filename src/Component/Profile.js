import React from 'react'
import { useAuth } from './Auth'
const Profile = () => {
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logout()
    }
  return (
    <div className='class7'>
      <div className='class8'>
      Welcome{auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}
export default Profile