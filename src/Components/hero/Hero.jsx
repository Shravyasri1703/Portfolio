import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration: 2,
      repeat: Infinity,
    },
  },
}


const sliderVariants = {
  initial: {
    x: 0,
   
  },
  animate: {
    x: '-500%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
      staggerChildren: 0.1,
    },
  },

}




function Hero() {
  return (
    <div className='hero'>
     <div className='wrapper1'>  
     <motion.div className='text-container' variants={textVariants} initial='initial' animate='animate'>
       <motion.h2  variants={textVariants} className='name'>Shravyasri</motion.h2>
       <motion.h1  variants={textVariants} className='about'>Full Stack Developer</motion.h1>
       
       <div className='buttons'>
        <motion.button  variants={textVariants} className='herob'>My Work</motion.button>
         <motion.button  variants={textVariants} className='herob'>Contact me</motion.button> 
       </div>
       <motion.img  className="scroll" variants={textVariants} animate='scrollButton' src="/scroll.png" alt='' />
      </motion.div>
     </div>
     <motion.div className="sliding" variants={sliderVariants} initial='initial' animate='animate'>
      Full Stack Developer
     </motion.div>
        <div className='imageContainer1' >
             <img src='./hero.png' alt='' />
        </div>
    </div>
  )
}

export default Hero