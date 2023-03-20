import { useFormik } from 'formik'
import React from 'react'
import './Pages.css'

function Paymentpage() {
    const formik=useFormik({
        initialValues:{
            number:"",
            date:"",
            cvv:""
        },
        validate:(value)=>{
            let errors={}

            if(!value.number){
                errors.number="Please enter number"
            }
            if(!value.date){
                errors.date="Please enter date"
            }
            if(!value.cvv){
                errors.cvv="Please enter cvv"
            }
            return errors
        },
        onSubmit:(value)=>{
            console.log(value)
        }
    })
  return (
    <div className='payment-container'>
        <div className='payment-mini-card'>
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
        </div>
    </div>
  )
}

export default Paymentpage