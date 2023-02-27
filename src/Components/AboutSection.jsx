import React from 'react'
import { motion } from 'framer-motion'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <div className='about-container'>
        <div className="img-slideshow">
            <div className='images'>
                <img src="/Images/slide-show-img (1).jpg" alt="slide-1" className='image one' />
                <img src="/Images/slide-show-img (2).jpg" alt="slide-2" className='image two' />
                <img src="/Images/slide-show-img (3).jpg" alt="slide-3" className='image three' />
                <img src="/Images/slide-show-img (4).jpg" alt="slide-4" className='image four' />
                <img src="/Images/slide-show-img (5).jpg" alt="slide-5" className='image five' />
            </div>
        </div>


        <div className='about-content-wrapper'>
            <div className='row1'>
                <div className='about-title about-title-1'>
                    <motion.h1
                        initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.2}} viewport={{once: true}}
                    >When<br />life<br /> gives<br /> you art...</motion.h1>
                </div>
                
                <div>
                <motion.div 
                initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.1, delay:0.3}} viewport={{once: true}}
                className='text-area text-area-1'>
                    
                    <motion.p
                    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.1, delay:1.5}} viewport={{once: true}}
                    >Ruma is an art gallery located in the historic city of Chigcago, IL. For years, we have been collecting, curating, and displaying various works of artists from all over the world. We believe in making art free and accessible to the masses.</motion.p>
                </motion.div>
                </div>
            </div>
            <div>
                <motion.img 
                initial={{opacity:0, rotateY: "90deg"}} whileInView={{opacity: 1, rotateY: 0}} transition={{duration: 1, delay: 0.3}} viewport={{once: true}}
                src="Images/random-img.jpg" alt="random-img" className='random-img' />
            </div> 
           
            <div className='row1'>
                <div className='about-title about-title-2'>
                    <motion.h1
                     initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.2}} viewport={{once: true}}
                    >Discover<br />beauty...<br /></motion.h1>
                </div>
                
                <div>
                <motion.div 
                initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.1, delay:0.3}} viewport={{once: true}}
                className='text-area text-area-2'>
                    
                    <p>Ruma is an art gallery located in the historic city of Chigcago, IL. For years, we have been collecting, curating, and displaying various works of artists from all over the world. We believe in making art free and accessible to the masses.</p>
                </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection