import React, {useState} from 'react'
import './SigninSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const SigninSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
    <div className="inputs">
        {action==="Sign In"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
        </div>}
        

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>

        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password'/>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

    </div>
    
    <div className="submit-container">
        <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>

    </div>

    </div>
  )
}

export default SigninSignup;