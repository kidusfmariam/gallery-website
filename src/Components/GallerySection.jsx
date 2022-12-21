import React from 'react'
import './GallerySection.css'
import { motion } from 'framer-motion'
import GalleryImg1 from '/Images/gallery_img (1).jpg'
import GalleryImg2 from '/Images/gallery_img (2).jpg'
import GalleryImg3 from '/Images/gallery_img (3).jpg'
import GalleryImg4 from '/Images/gallery_img (4).jpg'
const GallerySection = () => {
  return (
    <div className='gallery-section-container'>
      <div className='gallery-content-wrapper'>
            <motion.img initial={{height: 0}} whileInView={{height: "100%"}} transition={{delay: 0.4, duration: 1.3}} 
            src={GalleryImg1} alt="gallery-img-1" className='img1' />
            <motion.img initial={{width: 0}} whileInView={{width: "120%"}} transition={{delay: 0.6, duration: 1.3}} 
            src={GalleryImg2} alt="gallery-img-2" className='img2' />
            <motion.img initial={{width: "0%"}} whileInView={{width: "100%"}} transition={{delay: 0.8, duration: 1.3}}
            src={GalleryImg3} alt="gallery-img-3" className='img3' />
            <motion.img initial={{height: 0}} whileInView={{height: "100%"}} transition={{delay: 0.9, duration: 1.3}} 
            src={GalleryImg4} alt="gallery-img-4" className='img4' />
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 1.1}}
            className='header'>OUR <br />GALLERY</motion.h2>
            <motion.p  initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 1.2}}
                className='cta'>Explore <br/>
                our <svg width="73" height="24" viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72.0607 13.0607C72.6464 12.4749 72.6464 11.5251 72.0607 10.9393L62.5147 1.3934C61.9289 0.807611 60.9792 0.807611 60.3934 1.3934C59.8076 1.97919 59.8076 2.92893 60.3934 3.51472L68.8787 12L60.3934 20.4853C59.8076 21.0711 59.8076 22.0208 60.3934 22.6066C60.9792 23.1924 61.9289 23.1924 62.5147 22.6066L72.0607 13.0607ZM0 13.5H71V10.5H0V13.5Z" fill="white"/>
                    </svg><br />
                diverse <br />
                collection. 
            </motion.p>
      </div>
    </div>
  )
}

export default GallerySection
