import React, { useState } from 'react';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const SigninSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = () => {
        if (!email || !password) {
            setError("Email and password are required.");
            return;
            


        }
        
    };

    const handleSignIn = () => {
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
        
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-10">
                <div className="text-4xl font-bold text-purple-700 mb-6">
                    <span className="relative inline-block">{action}</span>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-purple-700"></div>
                </div>
                <div className="inputs flex flex-col gap-8">
                    {action === "Sign In" ? null : (
                        <div className="input flex items-center w-full bg-gray-200 rounded-lg h-20">
                            <img src={user_icon} alt="" className="w-8 h-8 mx-4" />
                            <input type="text" placeholder="Name" className="w-full bg-transparent border-none text-gray-700 text-xl focus:outline-none" />
                        </div>
                    )}

                    <div className="input flex items-center w-full bg-gray-200 rounded-lg h-20">
                        <img src={email_icon} alt="" className="w-8 h-8 mx-4" />
                        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-none text-gray-700 text-xl focus:outline-none" />
                    </div>

                    <div className="input flex items-center w-full bg-gray-200 rounded-lg h-20">
                        <img src={password_icon} alt="" className="w-8 h-8 mx-4" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent border-none text-gray-700 text-xl focus:outline-none" />
                    </div>
                    {action === "Sign Up" ? null : (
                        <div className="forgot-password text-right text-gray-700 text-lg mt-4">
                            Lost Password? <span className="text-blue-500 cursor-pointer">Click Here!</span>
                        </div>
                    )}

                </div>
                {error && <p className="text-red-500 text-lg mt-4">{error}</p>}
                <div className="flex justify-between mt-8">
                    <div className={`submit ${action === "Sign In" ? "bg-gray-400" : "bg-blue-500"} text-white py-3 px-6 rounded-full cursor-pointer w-40 text-xl font-bold flex justify-center items-center mr-4`} onClick={action === "Sign Up" ? handleSignUp : handleSignIn}>{action}</div>
                    <div className={`submit ${action === "Sign Up" ? "bg-gray-400" : "bg-blue-500"} text-white py-3 px-6 rounded-full cursor-pointer w-40 text-xl font-bold flex justify-center items-center`} onClick={() => setAction(action === "Sign Up" ? "Sign In" : "Sign Up")}>{action === "Sign Up" ? "Sign In" : "Sign Up"}</div>
                </div>
            </div>
        </div>
    )
}

export default SigninSignup;
