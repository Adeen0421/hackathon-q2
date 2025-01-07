// pages/index.js

import React from 'react';
import "./module.css"

const Home = () => {
    return (
        <div className={'container'}>
            <div className={'infoSection'}>
                <h2 className={'heading'}>General Information</h2>
                <div>
                    <h3 className={'subHeading'}>Eu dictumst cum at sed euismood condimentum?</h3>
                    <p className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                    <h3 className={'subHeading'}>Magna bibendum est fermentum eros.</h3>
                    <p className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                    <h3 className={'subHeading'}>Odio muskana hak eris conseekin sceleton?</h3>
                    <p className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                    <h3 className={'subHeading'}>Elit id blandit sabara boi velit gua mara?</h3>
                    <p className={'paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                </div>
            </div>
            <div className={'formSection'}>
                <h2 className={'heading'}>Ask a Question</h2>
                <form className={'form'} action="#" method="post">
                    <input type="text" name="name" placeholder="Your Name*" required className={'input'} />
                    <input type="text" name="subject" placeholder="Subject*" required className={'input'} />
                    <textarea name="message"   rows="8"placeholder="Type Your Message*" required className={'textarea'}></textarea>
                    <button type="submit" className={'button'}>Send Mail</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
