import React from 'react'
import Link from 'next/link'
import '../app/style/navbar2.css'
import { CiSearch } from "react-icons/ci";
    

const navbar2 = () => {
  return (
    <div>
      <div>
<header>
<div className="logo">
 <h1>Hekto</h1>
</div>
<nav>
 
<div className="dropdown">
  <button className="dropbtn" ><p className='a66'>Home</p>
      <i className="fa fa-caret-down"></i>
    </button>
   <div className="dropdown-content">
   <Link href={"/About"} className='a9'>About</Link>
      <Link href={"/Contact"} className='a9'>Contact</Link>
      <Link href={"/Faq"} className='a9'>Faq</Link>
      <Link href={"/ocomp"} className='a9'>Order Comp</Link>
      
      <Link href={"/blogpage"} className='a9'>Blog page</Link>
      <Link href={"/sblog"} className='a9'>Single Blog </Link>
    </div>
  </div> 
<Link href={""} className='a7'>Blog</Link>
<div className="dropdown">
  <button className="dropbtn" ><p className='a66'>Pages</p>
      <i className="fa fa-caret-down"></i>
    </button>
   <div className="dropdown-content">
   <Link href={"/Shoplist"} className='a9'>Shoplist Default</Link>
      <Link href={"/Shoplist2"} className='a9'>Shoplist </Link>
      <Link href={"/Shoplist3"} className='a9'>Shoplist Sidebar </Link>
     
    </div>
  </div> 
 <Link href={"/Shoplist3"} className='a7'>Shop</Link>
<Link href={"/Faq"} className='a7'>Contact</Link>
   

 
</nav>
<div className='search2'><input type="text" id="search" name="search"></input><a className='as'><CiSearch size={"1.3em"}  /></a></div>
</header>
</div>
    </div>
  )
}

export default navbar2
