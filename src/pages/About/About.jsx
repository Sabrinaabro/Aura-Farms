import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='section-about'>
      <div className='container-about'>
        <div className='container-content'>
          <div className='content-text'>
            <h1>About Us</h1>
            <p>
              Welcome to Aura Farms, where innovation meets agriculture.
              Our mission is to help farmers achieve higher yields, healthier crops,
              and sustainable farming practices through advanced agricultural technologies.
            </p>
          </div>
          <div className='about-image'>
            <img src="src/assets/about.png" alt="About Aura Farms" />
          </div>
        </div>
      </div>

      <div className='container-story'>
        <div className='container-contentstory'>
          <div className='content-textstory'>
            <h1>Our Story</h1>
            <p>
            Founded on the principles of sustainability and efficiency, 
            Aura Farms was established to address the growing challenges in modern agriculture. 
            We understand the importance of producing quality crops while maintaining ecological balance.
            With years of experience and a passion for farming, 
            our team is dedicated to revolutionizing the agricultural industry.
            </p>
          </div>
          <div className='story-image'>
            <img src="src/assets/story.jpg"  />
          </div>
        </div>
     
        <div className='container-vision'>
        <div className='container-contentvision'>
          <div className='content-textvision'>
            <h1>Our Vision</h1>
            <p>
            At Aura Farms, 
            we envision a future where every farmer has access to the tools and knowledge needed to maximize their crop potential.
            We strive to create solutions that are not only effective but also environmentally friendly.
            By integrating cutting-edge technology with traditional farming practices,
            we aim to enhance productivity and promote sustainable farming.
            </p>
          </div>
          <div className='vision-image'>
            <img src="src/assets/vision.jpg"  />
          </div>
        </div>
       </div>
      </div>

    </section>
  );
}

export default About;
