import { useFormik } from 'formik'
import React from 'react'
import './Pages.css'

function Forgotpassword() {
    const formik=useFormik({
        initialValues:{
            email:""
        },
        validate:(value)=>{
            let errors={}

            if(!value.email){
                errors.email="Please Enter Your Email"
            }
        },
        onSubmit:(value)=>{
            console.log(value)
        }
    })
  return (
    <div className='forgot-container'>
        <div className='forgot-minicard'>
            <form onSubmit={formik.handleSubmit}>
                <label>Email</label><br/>
                <input  style={{width:"300px",borderRadius:"10px",marginBottom:"10px"}} name='email' type='email' value={formik.values.email} onChange={formik.handleSubmit}></input><br/>
                <input type='submit' value='Submit' className='btn btn-success'></input><br/>
            </form>
        </div>
    </div>
  )
}

export default Forgotpassword