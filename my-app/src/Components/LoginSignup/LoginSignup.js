import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" name="" id="" placeholder='Name' />
                </div>}

                <div className="input">
                    <input type="email" name="" id="" placeholder='Email' />
                </div>
                <div className="input">
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> :  <div className="forget-password">
                Lost Password ? <span>Click here</span>
            </div>}
           
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login in</div>
            </div>
        </div>
    )
}

export default LoginSignup