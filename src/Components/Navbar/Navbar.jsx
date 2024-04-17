import React from 'react'
import './navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
function Navbar() {
  return (
    <div className='navbar'>
    <Sidebar />
    <div className='wrapper'>
   <motion.span initial={{opacity:0, scale:0.5}} 
   animate={{opacity:1, scale:1}} 
   transition={{duration:0.5}} >Welcome To My Profile</motion.span>
   <div className='social'>
    <a href='https://www.linkedin.com/in/shravyasri-678580241/'><img src='/linkedin.png' alt='' /></a>
    <a href='https://github.com/Shravyasri1703'><img src='/Git_hub.png' alt='' /></a>
    <a href='https://www.instagram.com/shravya_1712'><img src='/instagram.png' alt='' /></a>
    <a href='#'><img src='/facebook.png' alt='' /> </a>
    
   </div>
    </div>
    </div>
  )
}

export default Navbar