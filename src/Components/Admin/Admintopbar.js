import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admintopbar() {
    const nav=useNavigate()
    const logout=()=>{
        window.localStorage.removeItem("token")
        nav("/")
    }
    return (
        <div className='topbar-container-admin'>
          <img className='company-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0Qsds7r8txyn3WqMVXf6RNQHeiJ10GZsVc5gRTk4aw&s' alt='company-logo'></img>
          <h5 className='company-name'>Shopify</h5>
          <div className='topbar-minicontainer'>
            <h6 className='user'>Admin</h6>
            <button onClick={logout}  className='btn btn-danger btn-sm'>Logout</button>
          </div>
        </div>
      )
}

export default Admintopbar