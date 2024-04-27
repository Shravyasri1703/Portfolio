import React, { useRef } from 'react'
import './services.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const textVariants = {
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


function   Services() {


  return (
    <div className='services'>
      
       <motion.div className="intro" variants={textVariants} initial='initial' whileInView ='animate'>
        <h1>Introduction</h1>
        <p>
I'm Shravyasri, a third-year undergraduate student at Vishwakarma Institute of Technology Pune, pursuing B.Tech in Instrumentation and Control Engineering. Alongside my studies, I'm deeply involved in competitive programming and have a keen interest in web development. Crafting websites and web apps is not just a hobby but a passion for me. I approach my work with enthusiasm and a constant thirst for learning, always striving for perfection.
<br></br>
Additionally, I am the Multimedia Seceratary at the Entrepreneurship Development Cell of Vit Pune where I actively participate in the Entrepreneurship Cell of Vit, Pune, where I contribute to fostering an entrepreneurial spirit among students through various events and initiatives.
Also, I've volunteered for the college's Go Green activities, aiming to promote sustainability and create a healthier environment for our planet.
</p>
       </motion.div>
       <motion.div className="tech" variants={textVariants} initial='initial' whileInView ='animate'>
        <h1>Experience</h1>
        <p>Some of the newest technologies that I'm familiar with and have utilized in my projects</p>
        <div className="row1">
            <div className="first">
            <img src='./html-removebg-preview.png' alt='html'></img>
            <h6>Html 5</h6>
            </div>
            <div className="second">
            <img src='./css-removebg-preview.png' alt='html'></img>
            <h6>CSS</h6>
          </div>
            <div className="third">
            <img src='./javascript-removebg-preview.png' alt='html'></img>
            <h6>Javascript</h6>
            </div>
        </div>
        <div className="row2">
            <div className="first">
        <img src='./tw-removebg-preview.png' alt='html'></img>
            <h6>Tailwind CSS</h6>
            </div>

            <div className="second">
            <img src='./sass-removebg-preview.png' alt='html'></img>
            <h6>SASS</h6>
            </div>

            <div className="third">
            <img src='./react-removebg-preview.png' alt='html'></img>
            <h6>React</h6>
            </div>
        </div>
        <div className="row3">
           <div className="first">
            <img src='./node-removebg-preview.png' alt='html'></img>
            <h6>Node JS</h6>
            </div>
            <div className="second">
            <img src='./mongo-removebg-preview.png' alt='html'></img>
            <h6>MongoDB</h6>
            </div>

            <div className="third">
            <img src='./firebase-removebg-preview.png' alt='html'></img>
            <h6>Firebase</h6>
            </div>
          
        </div>
     </motion.div>
    </div>
  )
}

export default Services