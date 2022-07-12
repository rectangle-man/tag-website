import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import {motion} from "framer-motion";
import Home from './Components/Home';
import Carousel from './Components/Carousel';
import Parallax from './Components/Parallax';
import AnimatedRoutes from './AnimatedRoutes';
import JoinTag from './Components/JoinTag';
import Footer from './Components/Footer';
import AboutText from './Components/AboutText';
import FrontPage from './Components/FrontPage';
import {useRef, useEffect, useState} from "react";
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';


export default function AppEvents() {
  const location = useLocation();
  const [menu,setMenu] = useState(0);
  return (
    <motion.div animate={{y:[-1000,0]}} exit={{y:[0,-1000]}}>
      <Navbar setMenu={setMenu}/>
      <AnimatedRoutes/>
      <FrontPage text1="VELLORE INSTITUTE OF TECHNOLOGY" heading="EVENT NAME" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <AboutText heading="ABOUT US" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      <Parallax/>
      <Carousel heading="VALORANT"/>
      <Carousel heading="CSGO"/>
      <JoinTag/>
      <Footer/>  
    </motion.div>
  )
}
