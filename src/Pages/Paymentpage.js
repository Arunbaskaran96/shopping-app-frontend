
import React, { useEffect, useState } from 'react'
import './Pages.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Paymentpage() {
    const nav=useNavigate()
    // const [carts,setCarts]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
            const {data}=await axios.get("https://shopify-backend-x9ad.onrender.com/carts",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            
            
            const test=await data.map((item)=>item._id)
            var res=test.toString()
            await axios.put(`https://shopify-backend-x9ad.onrender.com/orders?order=${res}`,{"iscart":"no"},{
                headers:{
                  Authorization:`${window.localStorage.getItem("token")}`
                }
              })
              alert("Successfully Your order has been placed")
              nav("/navbar/cart")
        } catch (error) {
            console.log(error)
        }
    }




    // const payment=async()=>{
    //     // fetch("http://localhost:8000/create-checkout-session",{
    //     //     method:"POST",
    //     //     headers:{
    //     //         'Content-Type':'application/json'
    //     //     },
    //     //     body:JSON.stringify({
    //     //         items:[
    //     //             {id:1,quantity:2},
    //     //             {id:2,quantity:1}
    //     //         ]
    //     //     })
    //     // }).then((res)=>{
    //     //     if(res.ok) return res.json()
    //     //     return res.json().then(json=>Promise.reject(json))
    //     // }).then(({url})=>{
    //     //     window.location=url
    //     // }).catch(err=>{
    //     //     console.log(err)
    //     // })
    //     try {
    //       const {data}=  await axios.post("http://localhost:8000/create-checkout-session",{
    //             items:carts
    //         })
    //         window.location=data.url
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
  return (
    <div>
        {/* <div className='payment-mini-card'>
        <div className='payment-heading'>
            <h6 style={{fontSize:"20px"}}>Debit/Credit Card</h6>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE4g02viQw7YRTR3LpU2n4uEAIn5RUbiQkWwJT7xvoA&s' className='payment-card-image' alt=''/>
            <img src='https://cdn.iconscout.com/icon/free/png-256/master-card-4-842898.png?f=avif&w=128' className='payment-card-image' alt='card-image'/>
            <img src='https://cdn.iconscout.com/icon/free/png-256/payment-rupay-card-pay-bank-transaction-51318.png?f=avif&w=128' className='payment-card-image' alt='card-image'/>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div>
            <label className='payment-label'>Card Number</label><br/>
            <input name='number' value={formik.values.number} onChange={formik.handleChange} className='card-number' type='number'/><br/>
            <label className='payment-label'>Expiry Date</label>
            <label  style={{marginLeft:"80px"}} className='payment-label'>cvv</label><br/>
            <input name='date' value={formik.values.date} onChange={formik.handleChange} className='card-month' type='month'/>
            <input name='cvv' value={formik.values.cvv} onChange={formik.handleChange} className='card-cvv' type='password'/><br/>
            <input className='btn btn-success payment-btn' type='submit' value='Make Payment'/>
        </div>
        </form>
        </div> */}
        <h5>Please wait...</h5>
    </div>
  )
}

export default Paymentpage