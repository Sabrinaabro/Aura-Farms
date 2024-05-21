import React from 'react';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src="src/assets/icon.png" />
      </div>

      <a href='#' className='search'>
        <img src="src/assets/search.svg" />
        </a>

        <a href='#' className='btn'>
          Contact Us
        </a>  

      <ul>
        <li>
          <a href='#'>Home</a>
        </li>

        <li>
          <a href='#'>Services</a>
        </li>

        <li>
          <a href='#'>Shop</a>
        </li>

        <li>
          <a href='#'>How It Works</a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar
