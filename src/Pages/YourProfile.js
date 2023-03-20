import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function YourProfile() {
  const [user,setUser]=useState({})
  const[isloading,setLoading]=useState(true)

  useEffect(()=>{
    getUser()
  },[])

  const getUser=async()=>{
    try {
      const person=await axios.get("https://shopify-backend-x9ad.onrender.com/user" ,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setUser(person.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container profile-container'>
      {
        isloading ?(
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ): (
          <div className='row ' style={{marginTop:"100px"}}>
          <div className='col-5 ' style={{textAlign:"end"}}>
            <h6 className='profile-tags'>Name :</h6>
            <h6 className='profile-tags'>Email :</h6>
            <h6 className='profile-tags'>Contact :</h6>
            <h6 className='profile-tags'>City :</h6>
            <h6 className='profile-tags'>Address :</h6>
            <h6 className='profile-tags'>Pincode :</h6>
          </div>
          <div className='col-7'>
            <p className='profile-edit'>{user.name}</p>
            <p className='profile-edit'>{user.email}</p>
            <p className='profile-edit'>{user.mobile}</p>
            <p className='profile-edit'>{user.city}</p>
            <p className='profile-edit'>{user.address}</p>
            <p className='profile-edit'>{user.pincode}</p>
            <Link to='/navbar/editprofile' className='btn btn-primary useredit-btn'>Edit</Link>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default YourProfile