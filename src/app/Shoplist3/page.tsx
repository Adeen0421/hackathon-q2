





import React from 'react'
import "./module.css"
import { MdOutlineGridView } from "react-icons/md";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
const page = () => {
    const mcardata5=[
        {id:1 ,name:'Accumsan tincidunt',image:'sl1.png',price:'$42.00',price2:'$29.00'},
        {id:2 ,name:'In nulla',image:'sl2.png',price:'$42.00',price2:'$29.00'},
        {id:3 ,name:'Vel sam',image:'sl3.png',price:'$42.00',price2:'$29.00'},
        {id:4 ,name:'Portittor cum' ,image:'sl4.png',price:'$42.00',price2:'$29.00'},
        {id:5 ,name:'Nucn in',image:'sl5.png',price:'$42.00',price2:'$29.00'},
        {id:6 ,name:'Viate facilils',image:'sl6.png',price:'$42.00',price2:'$29.00'},
        {id:7 ,name:'Curabrotor litus',image:'sl7.png',price:'$42.00',price2:'$29.00'},
        
      ]
    
  return (
    <div >
      <div className='pro2'>
        <h3>E-commerce Accessories and Fashion item</h3>
         <p>Per page:  <input className='pro23'></input>   Sort By:  <select id="source" name="source">
              <option value="google">Best Match</option>
               <option value="facebook">Low to high</option>
               <option value="linkedIn">High to low</option>
              </select>   View:<CiViewTable className='v12'/> <MdOutlineGridView className='v12'/></p>
         
              </div>
              <p  className='pro20'>About 9,620 result in (0.62 seconds)</p>  
      
      <div className='leftsidebar'>
        <div ><h2>Product brand</h2>
       <div className='chckbox'>
         <p><input type="checkbox"/>Coaster Furniture</p>
        <p><input  type="checkbox"/>Fusion Dot High Fashion</p>
        <p><input  type="checkbox"/>Unique Furniture Restor</p>
        <p><input  type="checkbox" />Dream Furniture Flipping</p>
        <p><input  type="checkbox"/>Young Repurposed</p>
        <p><input  type="checkbox" />Green Diy furniture</p></div>
        
                <h2>Discount offer</h2>
                <div className='chckbox'>
         <p><input type="checkbox"/>20% Cashback</p>
        <p><input  type="checkbox"/>5% Cashback Offer</p>
        <p><input  type="checkbox"/>25% Discount Offer</p></div>


        <h2>Rating Item</h2>
        <div className='chckbox'>
         <p><input type="checkbox"/><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='gray' />(2341)</p>
        <p><input  type="checkbox"/><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='gray' /><IoStar color='gray' />(1726)</p>
        <p><input  type="checkbox"/><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='gray' /><IoStar color='gray' /><IoStar color='gray' />(258)</p>
        <p><input  type="checkbox"/><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar color='gray' /><IoStar color='gray' /><IoStar color='gray' />(25)</p></div>

        <h2>Catogries </h2>
<div className='chckbox'>
        <p><input  type="checkbox" />Prestashop</p> 
        <p><input  type="checkbox"/>Magento</p>
        <p><input  type="checkbox"/>Bigcommerce</p>
        <p><input  type="checkbox"/>OScommerce</p>
        <p><input  type="checkbox"/>3dcart</p>
        <p><input  type="checkbox"/>Bags</p>
        <p><input  type="checkbox"/>Accessories</p>
        <p><input  type="checkbox"/>Jewelry</p>
        <p><input  type="checkbox"/>Watches</p></div>
        <h2>Price Filters</h2>
        <div className='chckbox'><p><input  type="checkbox"/>$0.00 - $150.00</p> 
        <p><input  type="checkbox"/>$150.00 - $350.00</p>
        <p><input  type="checkbox"/>$150.00 - $504.00</p>
        <p><input  type="checkbox"/>$450.00 +</p></div>
        <h2>Filter by color</h2>
       <div className='chckbox1'><a> <p><FaCircle color='blue'/>Blue<FaCircle color='orange'/>Orange   <FaCircle color='brown'/>Brown<FaCircle color='Green'/>Green<FaCircle color='purple'/>Purple<FaCircle color='skyblue'/>Skyblue</p></a></div>
       </div>
      


          <div className='mcarssl3'>
              {mcardata5.map((carsp)=>(
              
             <div key={carsp.id} className='car-cardsl3'>
             
             <Image src={carsp.image} alt={carsp.name}/>
        
              
             <div className='popsl2 '><h3 className='d60'>{carsp.name}<FaCircle color='#DE9034'className='d578' fontSize={20}/>  <FaCircle color='#EC42A2'className='d57'fontSize={20}/>  <FaCircle color='#8568FF'className='d57'fontSize={20}/></h3>
             
      
             <p className='d54'>{carsp.price2}    <del className='popsl22'>{carsp.price}</del><IoStar color='#FFC416'/><IoStar color='#FFC416' /><IoStar color='#FFC416' /><IoStar  color='#FFC416'/><IoStar color='gray'/></p>
           <p className='d56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eum error neque aut, eaque sint earum quo tempora facere soluta labore ducimus vel ipsa maxime quos. Temporibus asperiores iusto quia?</p>
           <FaCartShopping color='#535399' className='d59'/> <FaHeart color='#535399'className='d59'/><FaMagnifyingGlassPlus  color="#535399"className='d59'/>
         </div>
      
             </div>
             
             ))}</div>
           </div>

    </div>
  )
}

export default page

