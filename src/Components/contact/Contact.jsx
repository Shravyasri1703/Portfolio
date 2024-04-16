import React from 'react'
import './contact.scss'
import { motion } from 'framer-motion'

const variants = {
    initial:{
        y:500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren:0.1,
        },
    }
}


function Contact() {
  return (
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
        <motion.div className="textContainer2">
            <motion.h1 className='top-head'>Connect With Me</motion.h1>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </motion.div>

            <motion.div className="item">
                <h2>Address</h2>
                <span>Pune</span>
            </motion.div>

            <div className="item">
                <h2>Phone</h2>
                <span>7004635662</span>
            </div>
        </motion.div>
        <div className="fontcontainer">
            <form>
             <input type='text' required placeholder='Nanme' />
             <input type='email' required placeholder='Email' />
             <textarea rows={8} placeholder='Message'></textarea>
             <button className='last'>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact