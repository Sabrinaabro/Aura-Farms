import React from 'react';
import "./Navbar.css";
import { useState } from 'react';


const Navbar = () => {
  const [activePage, setActivePage] = useState('Home');
    const handlePageChange = (page) => {
        setActivePage(page);
    };
  return (
    <nav>
      <div className='logo'>
        <img src="src/assets/icon.png" />
      </div>

      <a href='/' className='search'>
        <img src="src/assets/search.svg" />
        </a>

        <a href='/' className='btn'>
          Contact Us
        </a>  

      <ul>
        <li>
          <a href='/'
          onClick={() => handlePageChange('Home')}
            style={{ fontWeight: activePage === 'Home' ? 'bold' : 'normal' }}
            >
            Home</a>
        </li>

        <li>
          <a href='/'
          onClick={() => handlePageChange('Services')}
          style={{ fontWeight: activePage === 'Services' ? 'bold' : 'normal' }}
      >
          Services</a>
        </li>

        <li>
          <a href='/'
           onClick={() => handlePageChange('Shop')}
           style={{ fontWeight: activePage === 'Shop' ? 'bold' : 'normal' }}
       >
          Shop</a>
        </li>

        <li>
          <a href='/'
          onClick={() => handlePageChange('How It Works')}
          style={{ fontWeight: activePage === 'How It Works' ? 'bold' : 'normal' }}
      >
          How It Works</a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar
