import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Adminpages.css'

function ProductDetails() {
    const params=useParams()
    const[order,setOrder]=useState({})
    const [user,setUser]=useState({})

    useEffect(()=>{
        getOrder()
    },[])

    const getOrder=async()=>{
        try {
            const orderview=await axios.get(`https://shopify-backend-x9ad.onrender.com/allorders/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setOrder(orderview.data)
            setUser(orderview.data.userid)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container '>
        <div className='row'>
            <div className='col-md-2'>
                <Link to='/navbar/adminorder' className='btn btn-primary'>Back</Link>
            </div>
        </div>
        <div className='row '>
            <div className='col-md-10' style={{textAlign:"center"}}>
                <img style={{height:"200px"}} src={order.img} alt='mobile-image'/>
            </div>
        </div>
        <div className='row' >
            <div className='col-md-5' style={{textAlign:"end"}}>
                <label className='productdetail-label'>Ordered By :</label><br/>
                <label className='productdetail-label'>Customer Address :</label><br/>
                <label className='productdetail-label'>Customer city :</label><br/>
                <label className='productdetail-label'>Brand :</label><br/>
                <label className='productdetail-label'>Model :</label><br/>
                <label className='productdetail-label'>price :</label><br/>
            </div>
            <div className='col-md-7'>
                <h6 className='produtdetail-result'>{user.name}</h6>
                <h6 className='produtdetail-result'>{user.address}</h6>
                <h6 className='produtdetail-result'>{user.city}</h6>
                <h6 className='produtdetail-result'>{order.companyname}</h6>
                <h6 className='produtdetail-result'>{order.model}</h6>
                <h6 className='produtdetail-result'>{order.price}</h6>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails