import React from 'react'
import ruma from '../../public/RUMALogo.svg'
import menu from '../../public/menu.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <img src={ruma} alt="ruma-logo" className='ruma-logo' />
        <img src={menu} alt="menu-icon" className='navbar-img' />
    </nav>
  )
}

export default Navbar