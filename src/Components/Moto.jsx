import React from 'react'
import './Moto.css'
import ruma from '/RUMA..svg'
import MotoImg1 from '/Images/about_img_1.jpg'
import MotoImg2 from '/Images/about_img_2.jpg'
import MotoImg3 from '/Images/about_img_3.jpg'
import { motion } from 'framer-motion'
const Moto = () => {
  return (
    <div className='moto-container'>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>
            <img src={ruma} alt="ruma-logo-svg" className='ruma-logo-svg' />
            </motion.div>
                <motion.img initial={{height: 0}} whileInView={{height: "auto"}}  transition={{duration: 1}} src={MotoImg1} alt="moto-img-1" className='moto-img moto-img-1' />
          
         
                <motion.img  initial={{height: 0}} whileInView={{height: "auto"}}  transition={{duration: 1, delay: 0.3}} src={MotoImg2} alt="moto-img-2" className='moto-img moto-img-2' />
           
                <motion.img  initial={{height: 0}} whileInView={{height: "auto"}}  transition={{duration: 1, delay: 0.5}} src={MotoImg3} alt="moto-img-3" className='moto-img moto-img-3' />

                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.1, delay:0.6}} className='moto-title'>we rekindle the spirit of creativity.</motion.h1>

                <motion.p initial={{opacity: 0}} whileInView={{opacity: 0.6}} transition={{duration:1.1, delay:0.6}} className='moto-second'>a <br />place <br /> for <br /> art <br />to <br />thrive.</motion.p>
            
    </div>
  )
}

export default Moto
