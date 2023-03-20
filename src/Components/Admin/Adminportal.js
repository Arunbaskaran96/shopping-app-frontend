import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import Admintopbar from './Admintopbar'

function Adminportal() {
  return (
    <div>
        <Admintopbar/>
        <div className='portal-mini-container'>
            <Adminsidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Adminportal