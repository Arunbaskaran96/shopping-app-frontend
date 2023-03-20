import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './Componenets.css'
import { Outlet } from 'react-router-dom'

function Portal() {
  return (
    <div>
        <Topbar/>
        <div className='portal-mini-container'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Portal