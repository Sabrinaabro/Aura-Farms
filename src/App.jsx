import React from 'react';
import { Header, Info, Story, Products, Footer } from './components';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Registration/Register';
import Login from './components/Registration/Login';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';


const App = () => {
  return (
   <>
   <Router>
   <Navbar />
   <Routes>
   <Route 
          path="/" 
          element={
            <>
              <Header />
              <Story />
              <Products />
              <Info />
              <Footer />
              
            </>
          }
          />
          <Route path = "/contact-us" element={<Contact />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "*" element={<Error />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/shop" element={<Shop />} />
   </Routes>
   </Router>
   </>
  );
};

export default App
