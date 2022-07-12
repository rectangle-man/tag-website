import React from 'react'
import {motion} from 'framer-motion';
import "./aboutText.css"

export default function AboutText(props) {
  return (
    <div className="aboutContainer">

    <div className='aboutText'>
      <motion.div animate={{x:[-1000,0]}} exit={{x:[0,-1000]}} className="leftAbout">
        <div className="leftAboutHeading">
            {props.heading}
        </div>
        <div className="leftAboutText">
            {props.text}
        </div>
      </motion.div>
      <motion.div animate={{x:[1000,0]}} exit={{x:[0,1000]}} className="rightAbout">
        <img src='Assets/aboutImage.png'/>
      </motion.div>
    </div>
    </div>
  )
}
