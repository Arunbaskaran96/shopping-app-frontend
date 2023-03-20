import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Adminorders() {
  const[orders,setOrders]=useState([])

  useEffect(()=>{
    getOrders()
  },[])

  const getOrders=async()=>{
    try {
      const order=await axios.get("https://shopify-backend-x9ad.onrender.com/allorders",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      console.log(order.data)
      setOrders(order.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <table class="table" style={{boxShadow:"10px 10px 10px black",marginTop:"25px"}}>
            <thead className='table-dark'>
              <tr>
                <th scope="col">OrderedBy</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((item)=>{
                  return(
                    <tr>
                      <td>{item.userid.name}</td>
                      <td>{item.companyname}</td>
                      <td>{item.price}</td>
                      <td>
                        <Link to={`/navbar/orderview/${item._id}`} className='btn btn-primary btn-sm'>View Details</Link>
                      </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Adminorders