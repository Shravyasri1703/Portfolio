import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'




const items = [
    {
        id:1,
        title: 'AI Article Summarizer',
        img:'./Ai_Article.png',
        desc: 'A modern and user-friendly interface, offering an intuitive experience for users. Users can input the URL of a lengthy article, and the web app utilizes AI to provide a concise summary of the article content.The app includes a history feature, allowing users to save summaries locally, providing a convenient way to revisit and manage their reading history. Enables users to easily share or store the summarized content by copying it to their clipboard. Utilizes the advanced capabilities of Redux Toolkit (RTK) Query for making API requests. These requests fire conditionally based on specific criteria, optimizing data fetching and management and many more, including code architecture and reusability',
        link: 'https://github.com/Shravyasri1703/AI_SUMMARIZER',
    },

    {
        id:2,
        title: 'Amazon Clone',
        img:'./Ama_Clone.png',
        desc: 'Experience the convenience of online shopping with our Amazon clone project built using React. Sign up and log in securely with your email and password, browse through a wide range of products, add items to your cart, and seamlessly checkout using Stripe for secure payments. Enjoy a user-friendly interface and streamline your shopping experience with our reliable Firebase backend integration.',
       link : 'https://github.com/Shravyasri1703/Amazon_Clone'
    },
    {
        id:3,
        title: 'Code Hub',
        img:'./codehub.png',
        desc: 'Embark on a journey through the code cosmos with our GitHub Clone project, crafted with React and fortified by the MERN stack along with the stylish touch of TailwindCSS. Dive into the world of authentication and authorization with Passport.js, seamlessly integrating GitHub authentication for a secure login experience. Explore the vast expanse of GitHub user profiles and repositories, harnessing the power of the GitHub API. With lightning-fast filtering capabilities on the client side, discover, organize, and navigate through repositories with unparalleled efficiency',
        link : 'https://github.com/Shravyasri1703/Code_Hub'
    },
    {
        id:4,
        title: 'Chatify',
        img:'./Chat.png',
        desc: 'Discover seamless communication with our React-based chatting app. Sign up and log in securely using email and password authentication. Connect with friends in real-time, share photos, and engage in lively conversations. Easily find and chat with friends online, while having the flexibility to block unwanted contacts. Powered by Firebase, enjoy a reliable backend infrastructure ensuring smooth user experience and data security.',
        link : 'https://github.com/Shravyasri1703/Full_Stack_Chat'
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
              <img className='pic' src={item.img} alt='' />
               </div>  
           
            <motion.div className="textContainer" style={{ y }}>
                <h2 className='pname'>
                   {item.title} 
                </h2>
                <p>
                {item.desc}
                </p>
                <a href={item.link}>
                <button className='btns'>Source</button></a>
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