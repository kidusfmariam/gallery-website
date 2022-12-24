import React from 'react'
import CardLg from '../Components/CardLg'
import './Exhibitions.css'
import pastExhibitions from '../exhibtions'
import CardSm from '../Components/CardSm'
import { useState } from 'react'
const Exhibitions = () => {
  return (
    <>
    <section className="exhibition-container">
    
      <div className='wrapper'>
      <div className='exhibition-title one'>
            <p>UPCOMING EXHIBITION</p>
            <hr></hr>
        </div>
        <div className="upcoming">
        
        <CardLg></CardLg>
        </div>

        <div className='exhibition-title two'>
            <p>PAST EXHIBITIONS</p>
            <hr></hr>
        </div>
        <div className='past'>
        {
            pastExhibitions.map((item, index) =>(
                <CardSm
                key={index + 1}
                image={item.image}
                title={item.title}
                date={item.date}
                artist={item.artist} 
                />
            ))
        }
        </div>

        </div>
    </section>
    </>
  )
}

export default Exhibitions