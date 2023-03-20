import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Pages.css'
import{Access, addAccessories} from '../Redux/Reducer/AccessoriesSlice'
import { addItem } from '../Redux/Reducer/CartSlice'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Accessories() {
  // const[products,setProducts]=useState([])
  const products=useSelector(state=>state.Access.item)
  const dispatch=useDispatch()

  useEffect(()=>{
    getAccessories()
  },[])

  const getAccessories=async()=>{
    const access=await axios.get("http://localhost:8000/accessorieses",{
      headers:{
        Authorization:`${window.localStorage.getItem("token")}`
      }
    })
    dispatch(addAccessories(access.data))
  }


  const addCart=async(item)=>{
    const access=await axios.post("http://localhost:8000/addcart",item,{
      headers:{
        Authorization:`${window.localStorage.getItem("token")}`
      }
    })
  }
  return (
    <div className='container access-container'>
      <div className='row row-mob-container'>
        {
          products.map((item)=>{
            return(
              // <div className='col-md-4 mini-card'>
              //   <div class="card" style={{width:"18rem" ,backgroundColor:"whitesmoke"}}>
              //       <img  src={item.img} class="card-img-top access-img" alt="mobile-img"/>
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

export default Accessories