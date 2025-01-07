import React from 'react'
import "../app/style/card2.css"
const Card2 = () => {
      
   const cardata2=[
    {id:1 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s1.png'},
    {id:2 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s2.png'},
    {id:3 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s3.png'},
    {id:4 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s4.png'},
    {id:5 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s5.png'},
    {id:6 ,name:'Comfort Handy Craft',price:'$42.00',price2:'$42.00',image:'s6.png'},
   
]
  return (
    <div>
       <div className='c2'>
        {cardata2.map((cars)=>(
        
       <div key={cars.id} className='crd'>
       <img src={cars.image} alt={cars.name}/>
    <div className='ta'>
       <h3>{cars.name}</h3>
      
  
       <div className='pr'>{cars.price} </div>
       <div className='pr2'><del>{cars.price2}</del></div>
       </div>
   

       </div>
       
       ))}
     </div>
    </div>
  )
}

export default Card2
