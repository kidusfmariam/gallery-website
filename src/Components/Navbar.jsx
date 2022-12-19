import React from 'react'
import ruma from '../../public/RUMALogo.svg'
import menu from '../../public/menu.svg'
import close from '../../public/close.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'
const Navbar = () => {
  const[nav, setNav] = useState(false)
  return (
    <>
    <nav>
        <img src={ruma} alt="ruma-logo" className='ruma-logo' />
        <img src={menu} alt="menu-icon" className='navbar-img' onClick={() => setNav(!nav)} />
    </nav>
    <motion.div 
    animate={{x: nav ? 0 : "-100%"}} 
    initial={{x:"-100%"}}
    transition={{duration: 1.3, ease: "easeInOut"}}
    className="menu">
      <img src={close} alt="close" className='close' onClick={() => setNav(!nav)} />
      <div className='menu-container'>
      
        <ul className='links'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
        </div>
    </motion.div>
    </>
  )
}

export default Navbar