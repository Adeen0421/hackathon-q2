import React from 'react'
import "../app/style/card.css"
import { TbRectangleFilled } from "react-icons/tb";
import Image from 'next/image';

const mseries=()=>{
   
   const mcardata=[
        {id:1 ,name:'Cantiliver Chair',price:'$42.00',description:'Code-Y523201',image:'k1.png'},
        {id:2 ,name:'Cantiliver Chair',price:'$42.00',description:'Code-Y523201',image:'k2.png'},
        {id:3 ,name:'Cantiliver Chair',price:'$42.00',description:'Code-Y523201',image:'k3.png'},
        {id:4 ,name:'Cantiliver Chair',price:'$42.00',description:'Code-Y523201',image:'k4.png'},
      
   ]
    return(
    <div>
     <div className='mcars'>
        {mcardata.map((cars)=>(
        
       <div key={cars.id} className='car-card'>
       <Image  src={cars.image} alt={cars.name}/>
   
       <h3>{cars.name}</h3>
       <p className='aaa'><TbRectangleFilled className='gi'/><TbRectangleFilled className='pi'/>
       <TbRectangleFilled className='b'/></p>
       <p>{cars.description}</p>
       <div className='price'>{cars.price}</div>
   

       </div>
       
       ))}
     </div>
    </div>
    )
}
export default mseries;
 