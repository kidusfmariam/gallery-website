import React from 'react'
import './CardSm.css'
import { motion } from 'framer-motion'
const CardSm = ({image, title, date, artist}) => {
  return (
    <motion.div
    initial={{y: 120, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 1.2, delay: 0.4}} 
    className='card-sm-container'>
        <div className="card-sm-img">
            <img src={image} alt="" />
        </div>
        <div className='card-sm-content'>
            <h2 className='card-sm-title'>{title}</h2>
            <p className='card-sm-artist'>{artist}</p>
            <p className='card-sm-date'>{date}</p>
        </div>
        
        
    </motion.div>
  )
}

export default CardSm