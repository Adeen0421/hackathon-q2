import React from 'react'
import "../app/style/footer2.css"

const Footer2 = () => {
  return (
    <div className='footer2'>
      <div className='c'>
        <h1>Hekto</h1>
        <div  className='search0'><input type="text" id="search" name="search" placeholder='abc@gmai.com'></input><button className='as'>Sign Up</button></div>
        <p>Contact info</p>
        <p>17 Princess road,London,Greater London NW1 8JR,UK</p>
      </div>
      <div className='c'>
        <h3>Catogries</h3>
        <div className='cat'>
        <ul>  <li><a href="#">Laptop and Computers</a></li>
        <li><a href="#">Cameras and Photography</a></li>
          <li><a href="#">Smart Phones and Tablets</a></li>
          <li><a href="#">Video Games and Console</a></li>
          <li><a href="#">Waterproof Headphones</a></li></ul>
        </div>
      </div>
      <div className='c'>
        <h3>Customer Care</h3>
        <div className='cat'>
        <ul><li><a href="#">My Account</a></li>
        <li> <a href="#">Discount</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Order History</a></li>
          <li> <a href="#">Order Tracking</a></li>
          </ul>
        </div>
      </div>

      <div className='c'>
        <h3>Pages</h3>
        <div className='cat'>
          <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Browse the Shop</a></li>
          <li> <a href="#">Category</a></li>
          <li><a href="#">Pre-Built Pages</a></li>
          <li><a href="#">Visual Composer Elements</a></li>
          <li><a href="#">WooCommerce Pages</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer2
