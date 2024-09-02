import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = ()=>{
    
    const [passwordType, setPasswordType] = useState('password')
    return( 
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden ">
            <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover animate__animated animate__backInLeft"/>
            <div className="flex flex-col md:p-16 p-8 animate__animated animate__backInRight">
                <h1 className="text-4xl font-bold">New User</h1>
                <p className="text-lg text-gray-600">Create your account to start</p>
                <form className="mt-8 space-y-6">
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Fullname</label>
                        <input 
                            required
                            type="text" 
                            placeholder="Abid saharia"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Email</label>
                        <input 
                            required
                            type="email" 
                            placeholder="example@gmail.com"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="flex flex-col relative">
                        <label className="font-semibold text-lg mb-1">Password</label>
                        <input 
                            required
                            type={passwordType} 
                            placeholder="***********"
                            className="p-3 border border-gray-300 rounded"
                        />

                        <button onClick={()=>setPasswordType(passwordType==='password' ? 'text':'password')} type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
                            {
                                passwordType ==='password' ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>
                            } 
                        </button>
                    </div>

                    <button className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600">signup</button>
                </form>
                <div className="mt-2">
                        Already have an account? <Link className="text-blue-600 font-semibold" to="/login">login</Link>
                </div>
            </div>
        </div>
        
    )
}

export default SignUp;