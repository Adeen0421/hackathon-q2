import React from 'react'
import { CiViewTable } from "react-icons/ci";
import { MdOutlineGridView } from "react-icons/md";
import "./module.css"

import { FaCircle } from "react-icons/fa6";
import Image from 'next/image';
const page = () => {
  const mcardata5=[
    {id:1 ,name:'Top essentials Trends in 2021',image:'p1.png',price:'$42.00',price2:'$29.00'},
    {id:2 ,name:'Top essentials Trends in 2021',image:'p2.png',price:'$42.00',price2:'$29.00'},
    {id:3 ,name:'Top essentials Trends in 2021',image:'p3.png',price:'$42.00',price2:'$29.00'},
    {id:4 ,name:'Top essentials Trends in 2021',image:'p4.png',price:'$42.00',price2:'$29.00'},
    {id:5 ,name:'Top essentials Trends in 2021',image:'p5.png',price:'$42.00',price2:'$29.00'},
    {id:6 ,name:'Top essentials Trends in 2021',image:'p6.png',price:'$42.00',price2:'$29.00'},
    {id:7 ,name:'Top essentials Trends in 2021',image:'p7.png',price:'$42.00',price2:'$29.00'},
    {id:8 ,name:'Top essentials Trends in 2021',image:'p8.png',price:'$42.00',price2:'$29.00'},
    {id:9 ,name:'Top essentials Trends in 2021',image:'p9.png',price:'$42.00',price2:'$29.00'},
    {id:10 ,name:'Top essentials Trends in 2021',image:'p10.png',price:'$42.00',price2:'$29.00'},
    {id:11 ,name:'Top essentials Trends in 2021',image:'p11.png',price:'$42.00',price2:'$29.00'},
    {id:12 ,name:'Top essentials Trends in 2021',image:'p4.png',price:'$42.00',price2:'$29.00'},

  ]
  return (
<div>
<div className='pro2'>
  <h3>E-commerce Accessories and Fashion item</h3>
   <p className='lp9'>Per page:  <input className='pro23'></input>   Sort By:  <select id="source" name="source">
        <option value="google">Best Match</option>
         <option value="facebook">Low to high</option>
         <option value="linkedIn">High to low</option>
        </select>   View:<CiViewTable className='v12'/> <MdOutlineGridView className='v12'/></p>
   
        </div>
        <p  className='pro20'>About 9,620 result in (0.62 seconds)</p>  


    <div className='mcarsp'>
        {mcardata5.map((carsp)=>(
        
       <div key={carsp.id} className='car-cardp'>
       
       <Image src={carsp.image} alt={carsp.name}/>
  
        
       <div className='pop21 '><h3>{carsp.name}</h3>
       <FaCircle color='#DE9034'/>  <FaCircle color='#EC42A2'/>  <FaCircle color='#8568FF'/>

       <p>{carsp.price2}    <del className='pop2'>{carsp.price}</del></p>
     
      
   </div>

       </div>
       
       ))}
     </div>

</div>
 
  )
}

export default page
