import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='cta'>
        <p className='name'>Improve Your Crops With</p>
        <h1>Aura Farms</h1>
        <Link to='/shop' className='btn'>
          Our Products
        </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
