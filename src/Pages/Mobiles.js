import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {  addProduct, Product } from '../Redux/Reducer/ProductSlice'
import './Pages.css'

function Mobiles() {
  // const[products,setProducts]=useState([])
  const products=useSelector(state=>state.Product.item)
  const dispatch=useDispatch()

  useEffect(()=>{
    getMobiles()
  },[products])
  
  const getMobiles=async()=>{
    const mobile=await axios.get("http://localhost:8000/mobiles",{
      headers:{
        Authorization:`${window.localStorage.getItem("token")}`
      }
    })

    dispatch(addProduct(mobile.data))
  }

  const addCart=async(item)=>{
    try {
      const mobile=await axios.post("http://localhost:8000/addcart",item,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      alert("Added to the Cart")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container mobile-container'>
      <div className='row row-mob-container'>
        {
          products.map((item)=>{
            return(
              // <div className='col-md-4 mini-card'>
              //   <div class="card" style={{width:"18rem" ,backgroundColor:"whitesmoke"}}>
              //       <img  src={item.img} class="card-img-top mobile-img" alt="mobile-img"/>
              //       <div class="card-body">
              //           <h6 class="card-title">{item.model}</h6>
              //           <h6 class="card-title">Brand : {item.companyname}</h6>
              //           <p class="card-text">Price :{item.price}</p>
              //           <a href="#" class="btn btn-primary btn-sm">View  details</a>
              //           <button onClick={()=>addCart(item)} style={{marginLeft:"4px"}} className='btn btn-success btn-sm'>Add Cart</button>
              //      </div>
              //   </div>
              // </div>
              <div className='col-12 admin-mini-card'>
              <div className='row'>
                  <div className='col-3'>
                      <img className='admin-mobile-image' src={item.img} alt="mobile-image"/>
                  </div>
                  <div className='col-9'>
                      <h6 className='admin-mobile-brand'>Brand :{item.companyname}</h6>
                      <h6 className='admin-mobile-model'>Model :{item.model}</h6>
                      <p className='admin-mobile-price'>Price: {item.price}</p>
                      <Link className='btn btn-info btn-edit'>View</Link>
                      <button onClick={()=>addCart(item)} className='btn btn-success btn-cart'>Add cart</button><br/>
                  </div>
              </div>
          </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Mobiles