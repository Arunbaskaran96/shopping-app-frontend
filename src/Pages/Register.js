import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            mobile:"",
            city:"",
            address:"",
            pincode:"",
            password:""
        },
        validate:(value)=>{
            let errors={}

            if(!value.name){
                errors.name="Please enter your name"
            }
            if(!value.email){
                errors.email="Please enter your email"
            }
            if(!value.mobile){
                errors.mobile="Please enter your mobile"
            }
            if(!value.password){
                errors.password="Please enter your password"
            }
            if(!value.city){
                errors.city="Please enter your city"
            }
            if(!value.address){
                errors.address="Please enter your address"
            }
            if(!value.pincode){
                errors.pincode="Please enter your pincode"
            }

            return errors
        },
        onSubmit:async(value)=>{
            try {
                await axios.post("https://shopify-backend-x9ad.onrender.com/register",value)
                alert("Created")
                nav("/")
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
                <Link to='/' className='btn btn-info'>Back</Link>
            </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <div className='row register-container' style={{marginTop:"50px"}}>
                <div className='col-md-4' style={{textAlign:"end"}}>
                    <label className='register-label'>Name :</label><br></br>
                    <label className='register-label'>Email :</label><br></br>
                    <label className='register-label'>Password :</label><br></br>
                    <label className='register-label'>Mobile :</label><br></br>
                    <label className='register-label'>City :</label><br></br>
                    <label className='register-label'>Address :</label><br></br>
                    <label className='register-label'>Pincode :</label><br></br>
                </div>
                <div className='col-md-8'>
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className='register-int' type='text'></input><span style={{color:"red"}}>{formik.errors.name}</span><br></br>
                    <input name='email' value={formik.values.email} onChange={formik.handleChange} className='register-int' type='email'></input><span style={{color:"red"}}>{formik.errors.email}</span><br></br>
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} className='register-int' type='password'></input><span style={{color:"red"}}>{formik.errors.password}</span><br></br>
                    <input name='mobile' value={formik.values.mobile} onChange={formik.handleChange} className='register-int' type='text'></input><span style={{color:"red"}}>{formik.errors.mobile}</span><br></br>
                    <input name='city' value={formik.values.city} onChange={formik.handleChange} className='register-int' type='text'></input><span style={{color:"red"}}>{formik.errors.city}</span><br></br>
                    <input name='address' value={formik.values.address} onChange={formik.handleChange} className='register-int' type='text'></input><span style={{color:"red"}}>{formik.errors.address}</span><br></br>
                    <input name='pincode' value={formik.values.pincode} onChange={formik.handleChange} className='register-int' type='text'></input><span style={{color:"red"}}>{formik.errors.pincode}</span><br></br>
                    <input className='register-int btn btn-success' type="submit" value='Submit'></input><br></br>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register