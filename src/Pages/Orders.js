import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addorder } from '../Redux/Reducer/OrderSlice'
import './Pages.css'

function Orders() {
  // const[odr,setOdr]=useState([])
  const odr=useSelector(state=>state.Order.item)
  const dispatch=useDispatch()
  useEffect(()=>{
    getOrders()
  },[])
  const getOrders=async()=>{
    const order=await axios.get("http://localhost:8000/orders",{
      headers:{
        Authorization:`${window.localStorage.getItem("token")}`
      }
    })
    dispatch(addorder(order.data))
  }
  return (
    <div className='container orders-container' style={{paddingTop:"50px",padding:"0px 70px"}}>
      {
        odr.map((item)=>{
          return(
            <div className='row order-container'>
              <div className='col-3 ' style={{textAlign:"center"}}>
                <img className='order-img' src={item.img} alt='item-img'></img>
              </div>
              <div className='col-5' style={{marginTop:"10px"}} >
                <h5>Brand-{item.companyname}</h5>
                <p>Model-{item.model}</p>
              </div>
              <div className='col-4' style={{marginTop:"30px"}}>
                <h5>Price-{item.price}</h5>
              </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Orders