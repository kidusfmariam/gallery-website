import React from 'react'
import './NewsLetterSection.css'
import NewsLetterImg from '/Images/newsletter_img.jpg'
import Arrow2 from '/Arrow 2.svg'
import RUMA from '/RUMA..svg'
import { motion } from 'framer-motion'
const NewsLetterSection = () => {
  return (
    <div className='newsletter-wrapper'>
        <div className="newsletter-img">
            <motion.img initial={{height: 0}} whileInView={{height: "100%"}} transition={{delay: 0.3, duration: 1}} viewport={{once: true}}
            src={NewsLetterImg} alt="news-letter-img" className='img' />
        </div>
        <div className='newsletter-content'>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:0.9}} transition={{duration: 2, delay: 0.4}} viewport={{once: true}}
            className='newsletter-title'>subscribe to <br /> our newsletter.</motion.h2>
            <div className="input-section">
                <motion.input initial={{width: 0}} whileInView={{width: "70%"}} transition={{duration: 2, delay: 0.6}} viewport={{once: true}}
                type="email" className='email-input' placeholder='Email' />
                <motion.button initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 1.4}} viewport={{once: true}}
                className='cta-2'><img src={Arrow2} alt="arrow" /></motion.button>
            </div>
            <img src={RUMA} className="logo-img" />
        </div>
    </div>
  )
}

export default NewsLetterSection