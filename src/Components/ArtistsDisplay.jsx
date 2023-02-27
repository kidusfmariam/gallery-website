import React, { useEffect } from 'react'
import './ArtistsDisplay.css'
import {CiInstagram} from 'react-icons/ci'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { motion } from 'framer-motion'
const ArtistsDisplay = () => {
    
    const slideLeft  = () =>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 2000;
    }
    const slideRight  = () =>{
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 2000;
    }

  return (
    <div className='artists-container'>
      <h2 className='artists-title'>FEATURED ARTISTS</h2>

      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.4}}
      className='artist-names' id='slider'>
        <p className='icon icon-right' onClick={slideRight}><AiOutlineRight /></p>
        <p className='icon icon-left' onClick={slideLeft}><AiOutlineLeft/></p>
        <div className='artist-name  artist-name-one'>
            <h1>RYAN STEPHANS</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/ryan.jpg" alt="ryan" className='artist-image artist-image-one' />
        </div>

        <div className='artist-name artist-name-two'>
            <h1>ELIZABETH MARTIN</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/elizabeth.jpg" alt="ryan" className='artist-image artist-image-two' />
        </div>

        <div className='artist-name artist-name-three'>
            <h1>SONYA BASLIKOV</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/miriam.jpg" alt="ryan" className='artist-image artist-image-three' />
        </div>

        <div className='artist-name artist-name-four'>
            <h1>TOBIAS WYATT</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/tobias.jpg" alt="ryan" className='artist-image artist-image-four' />
        </div>

        <div className='artist-name artist-name-five'>
            <h1>YAZMIN LUTZ</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/yazmin.jpg" alt="ryan" className='artist-image artist-image-five' />
        </div>

        <div className='artist-name artist-name-six'>
            <h1>AMIYA BARTON</h1>
            <p><CiInstagram/></p>
            <img src="/Images/Artists/amya.jpg" alt="ryan" className='artist-image artist-image-six' />
        </div>
        
    


      </motion.div>
    </div>
  )
}

export default ArtistsDisplay

