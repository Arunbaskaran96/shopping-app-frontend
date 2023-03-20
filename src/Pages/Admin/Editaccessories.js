import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Editaccessories() {
    const params=useParams()
    const nav=useNavigate()
    const [isdisable,setDisable]=useState(false)
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
                await axios.put(`https://shopify-backend-x9ad.onrender.com/accessorieses/${params.id}`,value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
                alert("Successfully Edited")
                nav("/navbar/adminaccess")
            } catch (error) {
                setDisable(true)
                console.log(error)
            }
        }
    })

    useEffect(()=>{
        getAccess()
    },[])

    const getAccess=async()=>{
        try {
            const acs=await axios.get(`https://shopify-backend-x9ad.onrender.com/accessorieses/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            formik.setValues(acs.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to="/navbar/adminhome" className='btn btn-primary'>Back</Link>
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
                <input disabled={isdisable} className='addmobile-input btn btn-success' type='submit' value="Update"></input><br/>
            </div>
        </div>
    </form>
</div>
  )
}

export default Editaccessories