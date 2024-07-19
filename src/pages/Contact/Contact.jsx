import React from 'react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]:value,  //dynamic value

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(contact);
    };

  return (
    <>
        
        <section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading">Contact Us</h1>
              </div>
              <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="src/assets/contact.jpg" alt="we are always ready to help" />
          </div>

          <section className='section-form'>
            <div className='form-card'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>username</label>
                    <input
                    type='text'
                    name='username'
                    id='username'
                    autoComplete='off'
                    value={contact.username}
                    onChange={handleInput}
                    required
                    />
                </div>

                <div>
                <label htmlFor='email'>email</label>
                <input 
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
            <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>  
            </div>

            <div>
            <button type="submit">submit</button>
              </div>
            </form>
            </div>
          </section>
            </div>
           
            <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.8944192771855!2d68.25800397484429!3d25.408344523117012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c795e86cdf11b%3A0xef1bd0f6ec31ced3!2sMehran%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2s!4v1721230217685!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  )
}

export default Contact;