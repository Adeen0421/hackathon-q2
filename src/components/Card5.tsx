import React from 'react'
import "../app/style/card5.css"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import Image from 'next/image';
const Card5 = () => {
    const mcardata5=[
        {id:1 ,name:'Top essentials Trends in 2021',description:'More of this hello samlande lied much over tightly circa horse taped mightly',image:'b1.png',date:"21 August 2020",writter:"Sabeer Ali"},
        {id:2 ,name:'Top essentials Trends in 2021',description:'More of this hello samlande lied much over tightly circa horse taped mightly',image:'b2.png',date:"21 August 2020",writter:"Surfaxion"},
        {id:3 ,name:'Top essentials Trends in 2021',description:'More of this hello samlande lied much over tightly circa horse taped mightly',image:'b3.png',date:"21 August 2020",writter:"Sabeer Ali"},
    ]
  return (
    <div>
          <div className='mcars5'>
        {mcardata5.map((cars5)=>(
        
       <div key={cars5.id} className='car-card5'>
       
       <Image src={cars5.image} alt={cars5.name}/>
    <div className='alpp5'>   <p ><FaPenNib  className='alp5'/>{cars5.writter}<FaRegCalendarAlt className='alp55'/>{cars5.date}</p></div>

        
       <h3>{cars5.name}</h3>
            
       <p>{cars5.description}</p>
       <a href='#' className='aop5'>Read more</a>
      
   

       </div>
       
       ))}
     </div>
    </div>
  )
}

export default Card5
