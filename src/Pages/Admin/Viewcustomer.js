import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Adminpages.css'

function Viewcustomer() {
    const [user,setUser]=useState({})
    const params=useParams()

    useEffect(()=>{
      getUser()
    },[])

    const getUser=async()=>{
      try {
        const customer=await axios.get(`https://shopify-backend-x9ad.onrender.com/user/${params.id}`,{
          headers:{
            Authorization:`${window.localStorage.getItem("token")}`
          }
        })
        setUser(customer.data)
        console.log(customer.data)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <Link to='/navbar/admincustomer'  className='btn btn-info'>Back</Link>
        </div>
      </div>
      <div className='row user-container' >
        <div className='col-4' style={{textAlign:"end"}}>
          <label className='user-lbl'>Name :</label><br/>
          <label className='user-lbl'>Email :</label><br/>
          <label className='user-lbl'>Mobile :</label><br/>
          <label className='user-lbl'>Address :</label><br/>
          <label className='user-lbl'>City</label><br/>
          <label className='user-lbl'>Pincode :</label><br/>
        </div>
        <div className='col-8'>
          <h6 className='user-result'>{user.name}</h6>
          <h6 className='user-result'>{user.email}</h6>
          <h6 className='user-result'>{user.mobile}</h6>
          <h6 className='user-result'>{user.address}</h6>
          <h6 className='user-result'>{user.city}</h6>
          <h6 className='user-result'>{user.pincode}</h6>
        </div>
      </div>
    </div>
  )
}

export default Viewcustomer