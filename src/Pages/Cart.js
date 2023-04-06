import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, addsum } from '../Redux/Reducer/CartSlice'
import './Pages.css'

function Cart() {
  const cartitems=useSelector(state=>state.Cart.item)
  const total=useSelector(state=>state.Cart.total)
  const[data,setData]=useState([])
  const [disable,setDisable]=useState(false)
 
  const dispatch=useDispatch()

  // useEffect(()=>{
  //   getItems()
  // },[])

  // const getItems=async()=>{
  //   try {
  //     const result=await axios.get("http://localhost:8000/carts",{
  //       headers:{
  //         Authorization:`${window.localStorage.getItem("token")}`
  //       }
  //     })
  //     setCartitems(result.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    getCart()
  },[])

  const getCart=async()=>{
    const cartList=await axios.get("https://shopify-backend-x9ad.onrender.com/carts",{
      headers:{
        Authorization:`${window.localStorage.getItem("token")}`
      }
    })
    dispatch(addItem(cartList.data))
    setData(cartList.data)
  }


  const remove=async(item)=>{
    try {
      alert("Do you want to remove?")
      await axios.delete(`https://shopify-backend-x9ad.onrender.com/cartdelete/${item._id}`)
      getCart()
    } catch (error) {
      console.log(error)
    }
  }
  const makePayment=async()=>{
    setDisable(true)
    const test=data.map((item)=>item._id)
    var res=test.toString()
    try {
      await axios.put(`http://localhost:8000/orders?order=${res}`,{"iscart":"no"},{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      alert("Your order has been placed")
      getCart()
    } catch (error) {
      setDisable(false)
      console.log(error)
    }
  }


  return (
    <div className='container carts-container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-12'>
              {
                cartitems.map((item)=>{
                  return(
                    <div className='row cart-container'>
                      <div className='col-md-1'>
                        <img className='cart-img' src={item.img} alt=''/>
                      </div>
                      <div className='col-md-5'>
                        <h6>{item.model}</h6>
                        <h6>{item.price}</h6>
                      </div>
                      <div className='col-md-3'>
                          <button onClick={()=>remove(item)} className='btn btn-danger btn-sm'>Remove Cart</button>
                      </div>
                    </div>
                  )}
                )}
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col-md-12'>
              {
                cartitems.length>0?cartitems.map((item)=>{
                  return(
                    <div className='row cart-total-container'>
                    <div className='col-6'>
                      <h6>{item.model}</h6>
                    </div>
                    <div className='col-6'>
                      <h6>{item.price}</h6>
                    </div>
                  </div>
                  )
                }):<div></div>
              }
            </div>
            {
              cartitems.length>0?(
                <div className='row' style={{marginTop:"20px"}}>
                <h6>Total-{total}</h6>
                <button disabled={disable} onClick={makePayment} target="_blank" className='btn btn-success'>Buy now</button>
              </div>
              ):(
                <div>No cart item found</div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart