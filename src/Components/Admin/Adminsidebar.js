import React from 'react'
import { Link } from 'react-router-dom'

function Adminsidebar() {
    return (
        <div className='sidebar-container-admin'>
            <nav>
                <ul className='sidebar-ul'>
                    <Link to='/navbar/adminhome'>
                        <li>
                        <i class="fa-solid fa-mobile"></i>
                        <div className='menu-text'>
                            Mobiles
                        </div>
                        </li>
                    </Link>
                    <Link  to='/navbar/adminaccess' >
                        <li>
                        <i class="fa-sharp fa-solid fa-gear"></i>
                        <div className='menu-text'>
                            Accessories
                        </div>
                        </li>
                    </Link>
                    <Link  to='/navbar/adminorder' >
                        <li>
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        <div className='menu-text'>
                            Orders
                        </div>
                        </li>
                    </Link>
                    <Link  to='/navbar/admincustomer' >
                        <li>
                        <i class="fa-solid fa-user"></i>
                        <div className='menu-text'>
                            Customers
                        </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
      )
}

export default Adminsidebar