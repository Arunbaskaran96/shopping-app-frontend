import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Pages.css"

function Editprofile() {
    const[isdisable,setDisable]=useState(false)
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            mobile:"",
            pincode:"",
            city:"",
            address:""
        },
        validate:(value)=>{
            let errors={}

            if(!value.name){
                errors.name="Please enter your Name"
            }
            if(!value.email){
                errors.email="Please enter your Email"
            }
            if(!value.mobile){
                errors.mobile="Please enter your Mobile"
            }
            if(!value.address){
                errors.address="Please enter your Address"
            }
            if(!value.city){
                errors.city="Please enter your City"
            }
            if(!value.pincode){
                errors.pincode="Please enter your Pincode"
            }

            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                await axios.put("https://shopify-backend-x9ad.onrender.com/editprofile",value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
                alert("Updated")
                nav("/navbar/profile")
            } catch (error) {
                console.log(error)
            }
        }
    })

    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const user=await axios.get("https://shopify-backend-x9ad.onrender.com/user",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            formik.setValues(user.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row' >
            <div className='col-3'>
                <Link className='btn btn-info' to="/navbar/profile">Back</Link>
            </div>
        </div>
            <form onSubmit={formik.handleSubmit}>
                <div  style={{marginTop:"50px"}} className='row'>
                    <div className='col-4' style={{textAlign:"end"}}>
                        <label className='edit-label'>Name</label><br/>
                        <label className='edit-label'>Email</label><br/>
                        <label className='edit-label'>Contact</label><br/>
                        <label className='edit-label'>Address</label><br/>
                        <label className='edit-label'>City</label><br/>
                        <label className='edit-label'>Pincode</label><br/>
                    </div>
                <div className='col-8'>
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className='edit-int' type='text'></input>
                    <span style={{color:"red"}}>{formik.errors.name}</span><br/>
                    <input name='email' value={formik.values.email} onChange={formik.handleChange} className='edit-int' type='email'></input>
                    <span style={{color:"red"}}>{formik.errors.email}</span><br/>
                    <input name='mobile' value={formik.values.mobile} onChange={formik.handleChange} className='edit-int' type='text'></input>
                    <span style={{color:"red"}}>{formik.errors.mobile}</span><br/>
                    <input name='address' value={formik.values.address} onChange={formik.handleChange} className='edit-int' type='text'></input>
                    <span style={{color:"red"}}>{formik.errors.address}</span><br/>
                    <input name='city' value={formik.values.city} onChange={formik.handleChange} className='edit-int' type='text'></input>
                    <span style={{color:"red"}}>{formik.errors.city}</span><br/>
                    <input name='pincode' value={formik.values.pincode} onChange={formik.handleChange} className='edit-int' type='text'></input>
                    <span style={{color:"red"}}>{formik.errors.pincode}</span><br/>
                    <input disabled={isdisable} className='btn btn-success edit-int' type='submit' value='Update'></input>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Editprofile