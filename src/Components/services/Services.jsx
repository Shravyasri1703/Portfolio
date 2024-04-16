import React from 'react'
import './services.scss'
import { motion } from 'framer-motion'


function Services() {
  return (
    <div className='services'>
      
        <motion.div className='textContainer'>
        <p>I focus on your Brand Grow</p>
        <br></br>
        <p>and move forward</p>
        </motion.div>
        <motion.div className='titleContainer'>
            <div className='title'>
            <img src='/people.webp' />
            <h1>
                <b>
                Unique
                </b>
                Ideas
                </h1>
            </div>

            <div className='title'>
          
            <h1>
                <b>
               For Your
                </b>
                Bussiness
                </h1>
                <button>What We Do</button>
            </div>

        </motion.div>
        <motion.div className='listContainer'>
            <div className="box"></div>
        </motion.div>
    </div>
  )
}

export default Services