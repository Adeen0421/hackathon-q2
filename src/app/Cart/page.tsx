"use client"; // Add this line at the very top of your file

import { useState } from "react";
import "./module.css"
import Image from "next/image";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Ut diam consequat", price: 32.0, color: "Brown", size: "XL", quantity: 1 },
    { id: 2, name: "Vel faucibus posuere", price: 32.0, color: "Brown", size: "XL", quantity: 1 },
    { id: 3, name: "Ac vitae vestibulum", price: 32.0, color: "Brown", size: "XL", quantity: 1 },
    { id: 4, name: "Elit massa diam", price: 32.0, color: "Brown", size: "XL", quantity: 1 },
    { id: 5, name: "Proin pharetra elementum", price: 32.0, color: "Brown", size: "XL", quantity: 1 },
  ]);

  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={'container'}>
      <div className={'cart'}>
        <h1 className={'heading'}>Shopping Cart</h1>
        <div className={'grid'}>
          {/* Cart Items */}
          <div>
            <table className={'table'}>
              <thead>
                <tr>
                  <th className={'th'}><p  className={'td4'}>Product</p></th>
                  <th className={'th'}><p  className={'td4'}>Price</p></th>
                  <th className={'th'}><p  className={'td4'}>Quantity</p></th>
                  <th className={'th'}><p  className={'td4'}>Total</p></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className={'td'}>
                      <div className={'imageContainer'}>
                        <Image src={`/${item.name}.png`} alt={item.name} className={'image'} />
                        <div className={'itemDetails'}>
                          <p className="itemSubText1">{item.name}</p>
                          <p className={'itemSubText'}>Color: {item.color}</p>
                          <p className={'itemSubText'}>Size: {item.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className={'td'}><p  className={'td34'}>${item.price.toFixed(2)}</p></td>
                    <td className={'td'}>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        className={'quantityInput'}
                      />
                    </td>
                    <td className={'td'}><p  className={'td34'}>${(item.price * item.quantity).toFixed(2)}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Cart Totals */}
          <div className={'cartTotals'}>
            <h2>Cart Totals</h2>
          <div className={'totalsRow'}>
        <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className={'totalsRow'}>
              <span>Total:</span>
              <span>${(calculateSubtotal() + 10).toFixed(2)} (incl. shipping)</span>
            </div>
            <button className={'checkoutButton'}>Proceed to Checkout</button></div>
          
        </div>
      </div>
    </div>
  );
}
