import React from 'react'
import "../app/style/card4.css"
import Image from 'next/image'
const Card4 = () => {
      
   const cardata4=[
    {id:1 ,name:'Comfort Handy Craft',price:'$42.00',image:'s1.png'},
    {id:2 ,name:'Comfort Handy Craft',price:'$42.00',image:'s2.png'},
    {id:3 ,name:'Comfort Handy Craft',price:'$42.00',image:'s3.png'},
    {id:4 ,name:'Comfort Handy Craft',price:'$42.00',image:'s4.png'},
   
   
]
  return (
    <div>
       <div className='c24'>
        {cardata4.map((cars)=>(
        
       <div key={cars.id} className='crd4'>
       <Image src={cars.image} alt={cars.name}/>
    <div className='ta4'>
       <h3>{cars.name}</h3>
      
  
       <div className='pr4'>{cars.price} </div>
      
       </div>
   

       </div>
       
       ))}
     </div>
    </div>
  )
}

export default Card4
