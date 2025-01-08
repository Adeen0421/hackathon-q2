// pages/contact.js

import React from 'react';
import "./module.css"

const Contact = () => {
    return (
        <div className={'container'}>
        <div className='dmp'>
            <div className={'infoSection'}>
                <h2 className={'heading'}>Information About us</h2><br/>
                <p className={'description1'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.    Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                
                </p>
                <div className={'colors'}>
                    <span className={'colorCircle'} style={{ backgroundColor: '#5C6BC0' }}></span>
                    <span className={'colorCircle'} style={{ backgroundColor: '#E91E63' }}></span>
                    <span className={'colorCircle'} style={{ backgroundColor: '#29B6F6' }}></span>
                </div>
                </div>

           
           <div className='contact'>
            <div className='contactSection'>
                <h2 className={'heading'}>Contact Way</h2>
                 <div className={'colors1'}>
               <div className='coni'> <span className={'colorCircle1'} style={{ backgroundColor: '#5C6BC0' }}></span>  Tel: 877-67-88-99<br/>Email:shopstore.com</div>
               <div className='coni'>  <span className={'colorCircle1'} style={{ backgroundColor: '#29B6F6' }}></span>   20 Margaret St,London,<br/>Great Britain, 3NM98</div>
              
                
               <div className='coni'>  <span className={'colorCircle1'} style={{ backgroundColor: '#E91E63' }}></span> Support Forum <br/>- For over 24hr</div>
               <div className='coni'><span className={'colorCircle1'} style={{ backgroundColor: '#29B6F6' }}></span> Free standard shipping <br/>on all orders </div>
                
                </div>
                </div>
                </div>
                </div>
    
            <div className={'formSection'}>
                <h2 className={'heading'}>Get In Touch</h2>
                <p className={'description'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor.
                </p>
                <form className={'form'}>
                    <div className={'row'}>
                        <input type="text" placeholder="Your Name*" className={'input'} required />
                        <input type="email" placeholder="Your E-mail*" className={'input'} required />
                    </div>
                    <input type="text" placeholder="Subject*" className={'input'} required />
                    <textarea placeholder="Type Your Message*" className={'textarea'} rows={5} required></textarea>
                    <button type="submit" className={'button'}>Send Mail</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
