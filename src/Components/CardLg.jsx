import React from 'react'
import './CardLg.css'
import { motion } from 'framer-motion'

const CardLg = () => {
  return (
    <div className='card-wrapper'>
      <div className='img-container'>
        <motion.div 
        initial={{width: "100%"}} whileInView={{width: 0}} transition={{duration: 1.2, delay: 0.5}} viewport={{once: true}}
        className='card-lg-overlay'></motion.div>
        <img src="/Images/Exhibtions/Upcoming.jpg" alt="" />
      </div>
      <motion.div 
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.3, delay: 0.5}} viewport={{once: true}}
      className='content'>
        <h1>THE PATH TO <br></br>LIBERTY</h1>
        <p className='date'>DEC 25 - JAN 15</p>
        <p>We are delighted to announce the opening of The Path to Liberty, at our gallery this Sunday, 25 December. The fifth iteration of our annual Addis Calling group show continues to spotlight and showcase some of the most exciting emerging artists from the Chicago art scene.</p>
      </motion.div>
    </div>
  )
}

export default CardLg