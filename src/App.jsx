import React from 'react';
import { Header, Info, Story, Products, Footer } from './components';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Info />
      <Story />
      <Products />
      <Footer />
    </div>
  );
};

export default App
