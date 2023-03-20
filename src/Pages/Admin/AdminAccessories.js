import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminAccessories() {
    const[access,setAccess]=useState([])
    const [isdisable,setDisable]=useState(false)

    useEffect(()=>{
        getProduct()
    },[])

    const getProduct=async()=>{
        const access=await axios.get("https://shopify-backend-x9ad.onrender.com/accessorieses",{
            headers:{
                Authorization:`${window.localStorage.getItem("token")}`
            }
        })
        setAccess(access.data)
    }

    const remove=async(item)=>{
        try {
            setDisable(true)
            await axios.delete(`https://shopify-backend-x9ad.onrender.com/accessorieses/${item._id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setDisable(false)
            getProduct()
        } catch (error) {
            setDisable(false)
            console.log(error)
        }
    }
  return (
    <div className='container admin-access-container'>
        <div className='row' style={{marginTop:"15px"}}>
            <div className='col-2'>
                <Link to='/navbar/addaccessories' className='btn btn-info'>Add Accessories</Link>
            </div>
        </div>
        <div className='row' style={{marginTop:"10px"}}>
        {
                access.map((item)=>{
                    return(
                        // <div className='col-md-4 mini-card'>
                        //     <div class="card"  style={{width:"18rem" ,backgroundColor:"whitesmoke"}}>
                        //         <img class="card-img-top mobile-img" src={item.img}  alt="mobile-img"/>
                        //         <div class="card-body">
                        //             <h6 class="card-title">Brand-{item.companyname}</h6>
                        //             <h6 class="card-title"Model->{item.model}</h6>
                        //             <p  class="card-text">Price-{item.price}</p>
                        //             <Link to={`/navbar/editaccess/${item._id}`} class="btn btn-primary btn-sm">Edit</Link>
                        //             <button disabled={isdisable} className='btn btn-danger btn-sm  ml-2' onClick={()=>remove(item)}>Delete</button>
                        //         </div>
                        //     </div>
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
                                <Link className='btn btn-info btn-edit' to={`/navbar/editaccess/${item._id}`}>Edit</Link>
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

export default AdminAccessories