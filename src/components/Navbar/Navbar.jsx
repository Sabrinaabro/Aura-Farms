import React from 'react';
import "./Navbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

      <Link to='/' className='search'>
        <img src="src/assets/search.svg" />
        </Link>

        <Link to='/' className='btn'>
          Contact Us
        </Link>  

      <ul>
        <li>
          <Link to='/'
          onClick={() => handlePageChange('Home')}
            style={{ fontWeight: activePage === 'Home' ? 'bold' : 'normal' }}
            >
            Home</Link>
        </li>

        <li>
          <Link to='/services'
          onClick={() => handlePageChange('Story')}
          style={{ fontWeight: activePage === 'Story' ? 'bold' : 'normal' }}
      >
          Services</Link>
        </li>

        <li>
          <Link to='/shop'
           onClick={() => handlePageChange('Products')}
           style={{ fontWeight: activePage === 'Products' ? 'bold' : 'normal' }}
       >
          Shop</Link>
        </li>

        <li>
          <Link to='/'
          onClick={() => handlePageChange('How It Works')}
          style={{ fontWeight: activePage === 'How It Works' ? 'bold' : 'normal' }}
      >
          How It Works</Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar
