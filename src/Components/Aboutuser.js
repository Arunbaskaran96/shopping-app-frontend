import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Aboutuser() {
    const[user,setUser]=useState({})

    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const customer=await axios.get("https://shopify-backend-x9ad.onrender.com/user",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUser(customer.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Link style={{color:"white",textDecoration:"none"}} to="/navbar/profile">{user.name}</Link>
  )
}

export default Aboutuser