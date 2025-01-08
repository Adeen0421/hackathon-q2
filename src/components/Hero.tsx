import React from 'react'
import Card from "@/components/Card";


import "../app/style/hero.css"
import { FaDiamond } from "react-icons/fa6";
import { GoDiamond } from "react-icons/go";
import Card2 from './Card2';
import Card3 from './Card3';


import Features from './Features';
import Discount from './Discount';
import Card4 from './Card4';
import Up from './Up';
import Card5 from './Card5';



const Hero = () => {
  return (



      <div className='hr'><div className='aapp'>
    <img  className="bulb" src='bulb.png' ></img> 
    <img  className="sofa" src='sofa2.png' ></img> 
  
   
    <div className='ht'>
      <p className='p'>Best Furniture For Your Castle...</p>
      <h1 className='ha'>New Furniture Collection</h1>
      <h1 className='ha'>Trends in 2020</h1>
      <p className='g'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , laboriosam earum saepe ex amet nulla impedit eveniet ullam dolore quas nam repellat? Nihil.</p>
      <button className='b1'>Shop Now</button>
   
         </div>
         </div>
        
         <div> <img src='fopl.png'></img><div className='b1'><button className='b12'>Shop Now</button></div>     
         <div className='di'>   <a className='asa'><FaDiamond /> </a>
         <a><GoDiamond /> </a>
         <a><GoDiamond /> </a></div>
   
         </div>


         <div>
          <h1 className='ty'>Featured Products</h1>
          <Card />
         </div>



         <div>
          <h1 className='ty'>Latest Products</h1>
          <ul className='tt'>
            <li><a href='# '>New Arrival</a></li>
            <li><a href='#'>Best Seller</a></li>
            <li><a href='#'>Featured</a></li>
            <li><a href='#'>Speacial Offer</a></li>
          </ul>
       <Card2 />
          </div>


          <div className='of'>
            <h1>What Shopex Offer</h1>
            <div className="advantage-items">
 
 
 <div className="advantage-item">
   <img src="free-delivery 1.png" alt="Innovation" ></img>
   <h3>24/7 Support</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quidem esse tempora autem 
 </p>
</div>

<div className="advantage-item">
 <img src="cashback 1.png" alt="Quality" ></img>
 <h3>24/7 Support</h3>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quidem esse tempora autem 
</p>
</div>

<div className="advantage-item">
 <img src="premium-quality 1.png" alt="Experience"  ></img>
 <h3>24/7 Support</h3>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quidem esse tempora autem  </p>
</div>


<div className="advantage-item">
 <img src="Group (1).png" alt="Support"></img>
 <h3>24/7 Support</h3>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quidem esse tempora autem 
</p>
</div>
</div>
          </div>
        <Features />
     

      <div className='rt'>
        <h1>Trending Products</h1>
      </div>
       <Card3 />



      <div>
          <h1 className='ty'>Discount Items</h1>
          <ul className='tt'>
            <li><a href='#'>Wood Chair</a></li>
            <li><a href='#'>Plastic Chair</a></li>
            <li><a href='#'>Sofa collection</a></li>
           
          </ul>
       <Discount />
          </div>


<div>
  <h1 className='ty'>Top Catogories</h1>
     <Card4 />
</div>
 <Up />

<h1 className='ty'>Latest Blog</h1>
 <Card5 />
        
        


 

        </div>


     

  ) 
}

export default Hero
