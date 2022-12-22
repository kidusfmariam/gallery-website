import React from 'react'
import heroImg from '/Images/hero_img.jpg'
import './Hero.css'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content-container'>
            
            <div className='hero-text'>
            <motion.div whileInView={{opacity: '100%'}} initial={{opacity: "0"}} transition={{duration: 2, ease: "easeInOut"}}>
            <h1>REDISCOVER,<br></br> REIMAGINE,<br></br>RELIVE</h1>
            <p className='hero-p'>There are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this.</p>
            <p className='cta-1'>Learn More</p>
            </motion.div>
            </div>
            
        </div>
        <div className='hero-img-container'>
            <motion.div 
            whileInView={{height:'100%'}}
            transition={{duration:1.4, ease: "easeInOut"}}>
            <img  src={heroImg} alt="hero-img" />
            </motion.div>
        </div>
    </div>
  )
}

export default Hero