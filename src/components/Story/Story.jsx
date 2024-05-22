import React from 'react';
import "./Story.css";

const Story = () => {
  return(
    <story>
    <div className='storywrapper'>
    <h1>Our Stories Cultivate Excellence</h1>
    <div className='card'>
      <img src='src/assets/Card.png'></img>
    </div>
    <div className='card1'>
      <img src='src/assets/Card1.png'></img>
    </div>
    <div className='card2'>
      <img src='src/assets/Card2.png'></img>
    </div>
    <div className='card3'>
      <img src='src/assets/Card3.png'></img>
    </div>
    </div>
    </story>
  )
}

export default Story