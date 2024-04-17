import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'




const items = [
    {
        id:1,
        title: 'AI Article Summarizer',
        img:'https://images.pexels.com/photos/18392123/pexels-photo-18392123/free-photo-of-heart-carved-in-rock.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quidem, maiores necessitatibus temporibus consequatur officiis totam aut exercitationem provident illo alias. Ad, nulla enim. Fugit beatae deserunt sequi harum.',
    },
    {
        id:2,
        title: 'Amazon Clone',
        img:'https://images.pexels.com/photos/17151647/pexels-photo-17151647/free-photo-of-several-transparent-compact-audio-cassettes-with-visible-tape-and-red-inner-reels-placed-randomly-on-a-blue-background-selective-focus-technique.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quidem, maiores necessitatibus temporibus consequatur officiis totam aut exercitationem provident illo alias. Ad, nulla enim. Fugit beatae deserunt sequi harum.',
    },
    {
        id:3,
        title: 'Clone Tube',
        img:'https://images.pexels.com/photos/17151647/pexels-photo-17151647/free-photo-of-several-transparent-compact-audio-cassettes-with-visible-tape-and-red-inner-reels-placed-randomly-on-a-blue-background-selective-focus-technique.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quidem, maiores necessitatibus temporibus consequatur officiis totam aut exercitationem provident illo alias. Ad, nulla enim. Fugit beatae deserunt sequi harum.',
    },
    {
        id:4,
        title: 'Chatify',
        img:'https://images.pexels.com/photos/17151647/pexels-photo-17151647/free-photo-of-several-transparent-compact-audio-cassettes-with-visible-tape-and-red-inner-reels-placed-randomly-on-a-blue-background-selective-focus-technique.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur quidem, maiores necessitatibus temporibus consequatur officiis totam aut exercitationem provident illo alias. Ad, nulla enim. Fugit beatae deserunt sequi harum.',
    }

]

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref})
   const y = useTransform(scrollYProgress,[0,1], [-300,300])
    return(
       <section>
        <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
              <img className='pic' src='./mountains.png' alt='' />
               </div>  
           
            <motion.div className="textContainer" style={{ y }}>
                <h2>
                   {item.title} 
                </h2>
                <p>
                {item.desc}
                </p>
                <button className='btns'>See Demo</button>
            </motion.div>
            </div>
        </div>
       </section>
    )
}

function Portfolio() {
    
    const ref = useRef()
    const { scrollYProgress } = useScroll({target: ref, 
        offset:['end end', 'start start']})
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1 className='head'>MY PROJECTS</h1>
            <motion.div style={{ scaleX }} className="progressBar">

            </motion.div>
        </div>
     {items.map((item)=>(
         <Single item={item} key={item.id} />
     ))}
    </div>
  )
}

export default Portfolio