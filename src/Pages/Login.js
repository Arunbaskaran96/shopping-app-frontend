import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [isdisable,setDisable]=useState(false)
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""   
        },
        validate:(value)=>{
            let errors={}

            if(!value.email){
                errors.email="Please Enter Your Email"
            }
            if(!value.password){
                errors.password="Please Enter Your Password"
            }

            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                const login=await axios.post("https://shopify-backend-x9ad.onrender.com/login",value)
                window.localStorage.setItem("token",login.data.token)
                if(login.data.user.role==="User"){
                    nav("/navbar/mobiles")
                }else{
                    nav("/navbar/adminhome")
                }
            } catch (error) {
                alert("Incorrect Username/password")
                setDisable(false)
                console.log(error)
            }
        }
    })
  return (
    <div className='container-fluid'>
        {/* <div className='login-card'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label className='login-label'>Email</label><br></br>
                    <input name='email' value={formik.values.email} onChange={formik.handleChange} className='login-int' type='email'></input><br></br>
                    <span style={{color:"red"}}>{formik.errors.email}</span><br/>
                    <label className='login-label'>Password</label><br></br>
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} className='login-int' type='password'></input><br></br>
                    <span style={{color:"red"}}>{formik.errors.password}</span><br/>
                    <input disabled={isdisable} style={{marginTop:"15px"}}  className='btn btn-success login-int' type='Submit' value='Login'></input><br></br>
                </div>
            </form>
            <div>
                <Link to='/forgot-password'  style={{marginTop:"15px"}} className='btn btn-info login-int'>Forgot Password</Link><br></br>
                <Link to='/register' style={{marginTop:"15px"}} className='btn btn-primary login-int'>Create Account</Link><br></br>
            </div>
        </div> */}
        <div className='row'>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-md-12 login-leftside'>
                        <img className='login-img' src='https://doctorzbook.netlify.app/static/media/auth-logo.c8a07bf4.svg' alt='login-image'></img>
                        <p className='text-center' style={{marginTop:"80px"}}>Don't have an account</p>
                        <Link className='text-center login-signup' to='/register' style={{marginLeft:"175px",marginTop:"10px"}}>Sign up</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-8 login-rightside'>
                <div className='row' style={{marginTop:"60px"}}>
                    <div className='col-md-12 text-center'>
                        <form onSubmit={formik.handleSubmit}>
                            <h1 className='login-heading text-center'>Sign in</h1>
                            <label style={{marginTop:"20px",fontSize:"20px",fontStyle:"italic",marginLeft:"-290px"}}>Email</label><br/>
                            <input className='login-input ' type='email' value={formik.values.email} name='email' onChange={formik.handleChange} placeholder="Email"></input><br/>
                            <span style={{color:"red"}}>{formik.errors.email}</span><br/>
                            <label style={{marginTop:"5px",fontSize:"20px",marginLeft:"-260px",fontStyle:"italic"}}>Password</label><br/>
                            <input className='login-input' type='password' value={formik.values.password} name='password' onChange={formik.handleChange} placeholder="Password"></input><br/>
                            <span style={{color:"red"}}>{formik.errors.password}</span><br/>
                            <input disabled={isdisable} className='login-button btn btn-success' type='submit' value="Log in" name='email' onChange={formik.handleChange}></input><br/>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <Link to='/forgot-password' className='btn btn-info forgot-pass-button'>Forgot password</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login