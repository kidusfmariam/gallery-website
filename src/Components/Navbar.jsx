import React from 'react'
import ruma from '/RUMALogo.svg'
import menu from '/menu.svg'
import close from '/close.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const[nav, setNav] = useState(false)
  return (
    <>
    <nav>
        <Link to='/'><img src={ruma} alt="ruma-logo" className='ruma-logo' /></Link>
        <img src={menu} alt="menu-icon" className='navbar-img' onClick={() => setNav(!nav)} />
    </nav>
    <motion.div 
    animate={{x: nav ? 0 : "-100%"}} 
    initial={{x:"-100%"}}
    transition={{duration: 1.3, ease: "easeInOut"}}
    className="menu">
      <img src={close} alt="close" className='close' onClick={() => setNav(!nav)} />
      <div className='menu-container'>
      
        <div className='menu-left'>
          <Link  style={{textDecoration: 'none'}}  to="/"><motion.div onClick={() => setNav(!nav)} initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3, delay: 0.3}}
          className='nav-item'>
            <p>HOME</p>
            <img src="/Images/nav-img-1.jpg" alt="" className='nav-item-img' />
          </motion.div></Link>


          <Link style={{textDecoration: 'none'}} to="/about"><motion.div onClick={() => setNav(!nav)} initial={{opacity: 0, y: 110}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3, delay: 0.4}}
          className='nav-item'>
            <p>ABOUT</p>
            <img src="/Images/nav-img-2.jpg" alt=""  className='nav-item-img'/>
          </motion.div></Link>


          <Link  style={{textDecoration: 'none'}}  to="/artists"> <motion.div onClick={() => setNav(!nav)} initial={{opacity: 0, y: 120}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3, delay: 0.5}}
          className='nav-item'>
            <p>ARTISTS</p>
            <img src="/Images/nav-img-3.jpg" alt=""  className='nav-item-img'/>
          </motion.div></Link>


          <Link  style={{textDecoration: 'none'}}  to="/exhibitions"><motion.div onClick={() => setNav(!nav)} initial={{opacity: 0, y: 130}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.3, delay: 0.6}}
          className='nav-item'>
            <p>EXHIBITIONS</p>
            <img src="/Images/nav-img-4.jpg" alt=""  className='nav-item-img' />
          </motion.div></Link>
        </div>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.2, delay: 0.8}}
        className='menu-right'>
            <div>
              <h3>CONTACT US</h3>
              <p>rumagallery@info.com</p>
              <p>3809 Oakmound Road </p>
              <p>Chicago, IL</p>
            </div>

        </motion.div>

        </div>
    </motion.div>
    </>
  )
}

export default Navbar