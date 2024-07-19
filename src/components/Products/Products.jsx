import React from 'react';
import "./Products.css";
import { Link } from 'react-router-dom';

const Products = () => {
  return (
      <div className='productwrapper'>
        <h1>All Our</h1>
        <p>Organic Products</p>
        <Link to='/shop' className='btn'>
          Our Products
        </Link>
        <div className='fruits'>
          <img src="src/assets/fruit.png"/>
        </div>

        <div className='vegetables'>
          <img src="src/assets/vegetable.png"/>
        </div>

        <div className='grain'>
          <img src="src/assets/grain.png"/>
        </div>

        <div className='spices'>
          <img src="src/assets/spice.png"/>
        </div>

        <div className='products'>
          <img src="src/assets/product.png"/>
        </div>
      </div>
  )
}

export default Products