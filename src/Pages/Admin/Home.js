import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../Redux/Reducer/ProductSlice'
import '../Pages.css'

function Home() {
    const mobiles=useSelector(state=>state.Product.item)
    const [isdisable,setDisable]=useState(false)
    const dispatch=useDispatch()

    useEffect(()=>{
        getMobile()
    },[])

    const getMobile=async()=>{
        const product=await axios.get("https://shopify-backend-x9ad.onrender.com/mobiles",{
            headers:{
                Authorization:`${window.localStorage.getItem("token")}`
            }
        })
        dispatch(addProduct(product.data))
    }

    const remove=async(item)=>{
        try {
            setDisable(true)
            await axios.delete(`https://shopify-backend-x9ad.onrender.com/deleteproduct/${item._id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setDisable(false)
            getMobile()
            
        } catch (error) {
            setDisable(false)
            console.log(error)
        }
    }
  return (
    <div className='container admin-home-container'>
        <div className='row'>
            <div className='col-md-2' style={{marginTop:"15px"}}>
                <Link to='/navbar/addmobile' className='btn btn-primary'>Add Mobile</Link>
            </div>
        </div>
        <div style={{marginTop:"10px"}} className='row row-mob-container'>
            {
                mobiles.map((item)=>{
                    return(
                        // <div className='col-md-4 mini-card'>
                        //     <div class="card"  style={{width:"18rem" ,backgroundColor:"whitesmoke"}}>
                        //         <img class="card-img-top mobile-img" src={item.img}  alt="mobile-img"/>
                        //         <div class="card-body">
                        //             <h6 class="card-title">Brand-{item.companyname}</h6>
                        //             <h6 class="card-title"Model->{item.model}</h6>
                        //             <p  class="card-text">Price-{item.price}</p>
                        //             <Link to={`/navbar/editproduct/${item._id}`} class="btn btn-primary mr-2">Edit</Link>
                        //             <button disabled={isdisable} onClick={()=>remove(item)} className='btn btn-danger btn-sm'>Delete</button>
                        //         </div>
                        //     </div>
                        // </div>
                        <div className='col-md-12 admin-mini-card'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img className='admin-mobile-image' src={item.img} alt="mobile-image"/>
                                </div>
                                <div className='col-md-9'>
                                    <h6 className='admin-mobile-brand'>Brand :{item.companyname}</h6>
                                    <h6 className='admin-mobile-model'>Model :{item.model}</h6>
                                    <p className='admin-mobile-price'>Price: {item.price}</p>
                                    <Link className='btn btn-info btn-edit' to={`/navbar/editproduct/${item._id}`}>Edit</Link>
                                    <button disabled={isdisable} onClick={()=>remove(item)}  className='btn btn-danger btn-delete'>Delete</button><br/>
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

export default Home