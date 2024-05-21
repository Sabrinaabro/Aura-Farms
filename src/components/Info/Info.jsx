import React from 'react';
import "./Info.css";

const Info = () => {
  return (
    <section id='monitor' className='monitor'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4D542B"
     fill-opacity="1" d="M0,32L40,58.7C80,85,160,139,240,160C320,181,400,171,480,144C560,117,640,75,720,58.7C800,43,880,53,960,90.7C1040,128,1120,192,1200,192C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      
      <div className='wrappermonitor'>
        <h2>Monitor Your Farm</h2>
        <p>Agriculture Matters To The Future Of Development</p>
        <div className='info'>
          <ul>
            <li>
              Tons Of Harvest
            </li>
            <li>
              Unit Of Cattle
            </li>
            <li>
              Hectares Of Farm
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Info