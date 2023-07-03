import React from 'react'
import './topnav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'

function Topnav() {
  return (
    <div className='topnav'>
      <div className="leftnav">
        <FontAwesomeIcon icon={faBars} size='lg' />
        <div className="logo">
          <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="logo" height={60} />
          <p><sup>IN</sup></p>
        </div>
        
      </div>
      <div className="searchbar">
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Search' />
          <div className="sicon"><FontAwesomeIcon icon={faMagnifyingGlass} size='lg'/></div>
          
        </div>
        <div id='mic'> <FontAwesomeIcon icon={faMicrophone} size='lg' /></div>
       
      </div>
      <div className="signin">
        <FontAwesomeIcon icon={faEllipsisVertical} size='xl' />
        <button>
          <FontAwesomeIcon icon={faCircleUser} size='xl' />
          Sign In</button>
      </div>
    </div>
  )
}

export default Topnav