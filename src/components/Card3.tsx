import React from 'react'

import "../app/style/card3.css"
import Image from 'next/image'


const cd3=()=>{
   
   const cad3=[
          {id:1 ,name:'Cantiliver Chair',price:'$42.00',price2:'$29.00',image:'d1.png'},
        {id:2 ,name:'Cantiliver Chair',price:'$42.00',price2:'$29.00',image:'d2.png'},
        {id:3 ,name:'Cantiliver Chair',price:'$42.00',price2:'$29.00',image:'d3.png'},
        {id:4 ,name:'Cantiliver Chair',price:'$42.00',price2:'$29.00',image:'d4.png'},
      
   ]
    return(
    <div>
     <div className='mcars3'>
        {cad3.map((cars)=>(
        
       <div key={cars.id} className='car-card3'>
       <Image src={cars.image} alt={cars.name}/>
    <div className='att'>
       <h3>{cars.name}</h3>
      
      <div className='me'>
       <div className='pri'>{cars.price2} </div>
       <div className='pri2'><del>{cars.price}</del></div></div>
       </div>
   

       </div>
       
       ))}
     </div>

<div className='mui'>
     <div className='ui'>
        <h2>23% off in all products</h2>
        <a href='#'>Shop now</a>
        <Image alt='fff' src='image 1162.png'/>
     </div>
     <div className='ui'>
        <h2>23% off in all products</h2>
        <a href='#'>View collection </a>
        <Image alt="vg"src='image 1161.png'/>
     </div>

     <div className='maty'>
        <div className='aty'>
            <Image alt="ff" src='image 30.png'/>
            <p>Exclusive seat chair</p>
            <p>$32.00</p>
        </div>
        <div className='aty'>
            <Image alt='ff' src='image 19.png'/>
            <p>Exclusive seat chair</p>
            <p>$32.00</p>
        </div>
        <div className='aty'>
            <Image alt='ff' src='image 28.png'/>
            <p>Exclusive seat chair</p>
            <p>$32.00</p>
        </div>

     </div>
     </div>

     
    </div>
    )
}
export default cd3;
 