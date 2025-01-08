
import Link from "next/link"
import "../app/style/navbar.css"
import { IoMdArrowDropdown } from "react-icons/io";

import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";


export default function Navbar(){

    return(
      <div className="navbar">
       <div> <p className="info"><a className="aa"><CgMail />Adeenkhan421@gmail.com</a></p></div> <div><p className="info"><a className="aa"><FiPhoneCall />  1234-56789</a></p></div> 
      
        
        <div className="menu-bar">
            <ul>
                <li><a href="#" className="aa">English<IoMdArrowDropdown /></a>
            
                </li>
               <li><a href="#" className="aa">USD<IoMdArrowDropdown /></a></li>
                <Link href={"/login"} className="ko77"><li>Login</li></Link>
                
                <li><a href="#" className="aa">Wishlist<CiHeart /></a></li>
                <Link href={"/Cart"} className="ko77"><li><FiShoppingCart /></li></Link>
            </ul>


        </div>

      </div>



    )
}