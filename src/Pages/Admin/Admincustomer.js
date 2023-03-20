import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Adminpages.css'

function Admincustomer() {
    const[user,setUser]=useState([])

    useEffect(()=>{
        getCustomer()
    },[])

    const getCustomer=async()=>{
        const users=await axios.get("https://shopify-backend-x9ad.onrender.com/users",{
            headers:{
                Authorization:`${window.localStorage.getItem("token")}`
            }
        })
        setUser(users.data)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <table class="table table-container">
                    <thead className='table table-dark'>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <Link to={`/navbar/customerview/${item._id}`} className='btn btn-primary btn-sm'>View</Link>
                                        </td>
                                    </tr>)})}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Admincustomer