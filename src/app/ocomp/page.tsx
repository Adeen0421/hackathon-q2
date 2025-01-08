import React from "react";
import "./module.css"
import Image from "next/image";

const OrderComplete = () => {
  return (
    <div className={'container23'}>
      <div className={'header'}>
        <Image src="/clock.png" alt="Clock Icon" className={'icon'} />
        <h1>Your Order Is Completed!</h1>
      </div>
      <p className={'message'}>
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>
      <button className={'button'}>Continue Shopping</button>
    </div>
  );
};

export default OrderComplete;
