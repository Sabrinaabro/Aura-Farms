import React from 'react';
import "./Navbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activePage, setActivePage] = useState('Home');

    const handlePageChange = (page) => {
        setActivePage(page);
    }
  return (
    <nav>
      <Link
      to='/'
      className={`logo ${activePage === 'Home' ? 'active' : ''}`}
      onClick={() => handlePageChange('Home')}
    >
      <img src="src/assets/icon.png" alt="Logo" />
    </Link>

    <Link 
  to='/register' 
  className={`btn ${activePage === 'Home' ? 'active' : ''}`} 
  onClick={() => handlePageChange('Register')}
>
   Sign up
 </Link>
      <ul>
        <li>
          <Link to='/'
          onClick={() => handlePageChange('Home')}
            className={activePage === 'Home' ? 'active' : '' }
            >
            Home</Link>
        </li>

        <li>
          <Link to='/services'
          onClick={() => handlePageChange('Story')}
          className={activePage === 'Story' ? 'active' : '' }
      >
          Services</Link>
        </li>

        <li>
        <Link to='/shop'
        onClick={() => handlePageChange('Shop')}
        className={activePage === 'Shop' ? 'active' : ''}
        >
        Shop
       </Link>
        </li>

        <li>
          <Link to='/about'
          onClick={() => handlePageChange('About')}
          className={activePage === 'About' ? 'active' : '' }
      >About</Link>
        </li>

        <li className='contact-us'>
          <Link to='/contact-us'
          onClick={() => handlePageChange('Contact Us')}
          className={activePage === 'Contact Us' ? 'active' : ''}
      >
          Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
