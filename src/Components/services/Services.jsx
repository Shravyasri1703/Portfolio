import React from 'react'
import './services.scss'
import { motion } from 'framer-motion'


function   Services() {
  return (
    <div className='services'>
      
       <div className="intro">
        <h1>Introduction</h1>
        <p>
I'm Shravyasri, a third-year undergraduate student at Vishwakarma Institute of Technology Pune, pursuing B.Tech in Instrumentation and Control Engineering. Alongside my studies, I'm deeply involved in competitive programming and have a keen interest in web development. Crafting websites and web apps is not just a hobby but a passion for me. I approach my work with enthusiasm and a constant thirst for learning, always striving for perfection.
<br></br>
Additionally, I am the Multimedia Seceratary at the Entrepreneurship Development Cell of Vit Pune where I actively participate in the Entrepreneurship Cell of Vit, Pune, where I contribute to fostering an entrepreneurial spirit among students through various events and initiatives.
Also, I've volunteered for the college's Go Green activities, aiming to promote sustainability and create a healthier environment for our planet.
</p>
       </div>
       <div className="tech">
        <h1>Experience</h1>
        <p>Some of the newest technologies that I'm familiar with and have utilized in my projects</p>
        <div className="row1">
            <div className="first">
            <img src='./html.png' alt='html'></img>
            <h6>Html 5</h6>
            </div>
            <div className="second">
            <img src='./css.png' alt='html'></img>
            <h6>CSS</h6>
            </div>
            <div className="third">
            <img src='./javasc.png' alt='html'></img>
            <h6>Javascript</h6>
            </div>
        </div>
        <div className="row2">
            <div className="first">
        <img src='./tw.png' alt='html'></img>
            <h6>Tailwind CSS</h6>
            </div>

            <div className="second">
            <img src='./sass-logo-11536003922jd0taxrqrv.png' alt='html'></img>
            <h6>SASS</h6>
            </div>

            <div className="third">
            <img src='./react.png' alt='html'></img>
            <h6>React</h6>
            </div>
        </div>
        <div className="row3">
           <div className="first">
            <img src='./download (4).png' alt='html'></img>
            <h6>Node JS</h6>
            </div>
            <div className="second">
            <img src='./mongo.png' alt='html'></img>
            <h6>MongoDB</h6>
            </div>

            <div className="third">
            <img src='./firebase.png' alt='html'></img>
            <h6>Firebase</h6>
            </div>
          
        </div>
     </div>
    </div>
  )
}

export default Services