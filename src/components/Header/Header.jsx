import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar />
        <div className='cta'>
        <p className='name'>Improve Your Crops With</p>
        <h1>Aura Farms</h1>
        <a href='#' className='btn'>
          Our Products
        </a>
        </div>
      </div>
    </header>
  )
}

export default Header
