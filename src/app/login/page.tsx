import React from 'react'
import Link from 'next/link'
import "./module.css"
const page = () => {
  return (
    <div className='login1'>
     <br/><h1>Login</h1>
     <h5>Please login using account detail below</h5>
<div className='searc96'><input type="text" placeholder='Email Address'></input></div>
<div className='searc96'><input type="text" placeholder=' Password'></input></div>
<p className="ret"><a>Forget your Password?</a></p>
    <Link href={"/"} className='ret3'> <button >Sign In</button></Link>
     <p className='ret2'>Dont have an account? <a>Create an account</a></p><br/>
    </div>
  )
}

export default page









