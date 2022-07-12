import React from 'react'
import Home from './Components/Home';
import Menu from './Components/Menu';
import ReactDOM from "react-dom/client";
import Footer from './Components/Footer';
import App from './App';
import {AnimatePresence} from 'framer-motion';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

export default function AnimatedRoutes() {
   const location = useLocation(); 
  return (
    <AnimatePresence>

    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
    </Routes>
    </AnimatePresence>
  );
}
