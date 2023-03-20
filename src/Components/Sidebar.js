import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../Redux/Reducer/CartSlice'
import './Componenets.css'

function Sidebar() {
    const [cartlist,setCartlist]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        getCart()
    },[cartlist])
    const getCart=async()=>{
        const cartlist=await axios.get("https://shopify-backend-x9ad.onrender.com/carts",{
            headers:{
                Authorization:`${window.localStorage.getItem("token")}`
            }
        })
        setCartlist(cartlist.data)
    }
  return (
    <div className='sidebar-container'>
        <nav>
            <ul className='sidebar-ul'>
                <Link to='/navbar/mobiles'>
                    <li>
                    <i class="fa-solid fa-mobile"></i>
                    <div className='menu-text'>
                        Mobiles
                    </div>
                    </li>
                </Link>
                <Link  to='/navbar/accessories' >
                    <li>
                    <i class="fa-sharp fa-solid fa-gear"></i>
                    <div className='menu-text'>
                        Accessories
                    </div>
                    </li>
                </Link>
                <Link  to='/navbar/cart' >
                    <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className='menu-text'>
                        Cart-{cartlist.length}
                    </div>
                    </li>
                </Link>
                <Link  to='/navbar/orders' >
                    <li>
                    <i class="fa-solid fa-suitcase-rolling"></i>
                    <div className='menu-text'>
                        Orders
                    </div>
                    </li>
                </Link>
                <Link  to='/navbar/profile' >
                    <li>
                    <i class="fa-solid fa-user"></i>
                    <div className='menu-text'>
                        Profile
                    </div>
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar