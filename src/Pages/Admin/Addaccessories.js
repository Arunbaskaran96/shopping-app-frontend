import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Addaccessories() {
    const [isdisable,setDisable]=useState(false)
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            companyname:"",
            model:"",
            img:"",
            price:""
          },
        validate:(value)=>{
            let errors={}
            if(!value.companyname){
              errors.companyname="Please fill this field"
            }
            if(!value.model){
              errors.model="Please fill this field"
            }
            if(!value.img){
              errors.img="Please fill this field"
            }
            if(!value.price){
              errors.price="Please fill this field"
            }
      
            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                await axios.post("https://shopify-backend-x9ad.onrender.com/accessories",value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
                alert("Successfully Created")
                nav("/navbar/adminaccess")
            } catch (error) {
                setDisable(false)
                console.log(error)
            }
        }
    })
  return (
    <div className='container add-access-container'>
    <div className='row'>
      <div className='col-2'>
        <Link to='/navbar/adminaccess' className='btn btn-primary'>Back</Link>
      </div>
    </div>
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-4' style={{textAlign:"end"}}>
          <label className='addmobile-label'>Company name :</label><br/>
          <label className='addmobile-label'>Model :</label><br/>
          <label className='addmobile-label'>Price :</label><br/>
          <label className='addmobile-label'>Img Url :</label><br/>
        </div>
        <div className='col-8'>
          <input name='companyname' value={formik.values.companyname} onChange={formik.handleChange} className='addmobile-input' type='text'></input><span style={{color:"red"}}>{formik.errors.companyname}</span><br/>
          <input name='model' value={formik.values.model} onChange={formik.handleChange}  className='addmobile-input' type='text'></input><span style={{color:"red"}}>{formik.errors.model}</span><br/>
          <input name='img' value={formik.values.img} onChange={formik.handleChange}  className='addmobile-input' type='text'></input><span style={{color:"red"}}>{formik.errors.price}</span><br/>
          <input name='price' value={formik.values.price} onChange={formik.handleChange}  className='addmobile-input' type='text'></input><span style={{color:"red"}}>{formik.errors.img}</span><br/>
          <input disabled={isdisable} className='addmobile-input btn btn-success' type='submit' value="Create"></input><br/>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Addaccessories