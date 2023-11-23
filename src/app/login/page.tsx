"use client"
import "../login/login.css"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaEnvelope, FaLock } from "react-icons/fa";
export default function Login() {

  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handleSubmit = () => { 
    if (isFormValid) { 
        console.log('Form submitted successfully!'); 
    } else { 
        console.log('Form has errors. Please correct them.'); 
    } 
}; 
  const validateForm = () => { 
    let errors = {};  

    if (!email) { 
        errors.email = 'Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
        errors.email = 'Email is invalid.'; 
    } 

    if (!password) { 
        errors.password = 'Password is required.'; 
    } else if (password.length < 6) { 
        errors.password = 'Password must be at least 6 characters.'; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
}; 

  useEffect(() => {
validateForm();

  }, [email,password])

  return (
    <div className="bg-slate-200 h-[570px]">

      <div className="grid place-items-center ">
        <div className="signup-form w-[480px] sm:w-[330px] bg-white shadow-[2px_4px_8px_#6b728040] text-center p-8 rounded-lg mt-[30px] ">
          <div className="container">
            <div className="header mb-12">
              <h1 className="font-[bolder] text-[28px] text-indigo-500">Login Account</h1>
              {/* <p className="text-sm text-gray-500">Get started for free!</p> */}
            </div>
            <form>
              <div className="input ">
                <i className="fa-solid fa-envelope"><FaEnvelope /></i>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {errors?.email && <p style={{ color: 'red' }}>{errors?.email}</p>}
                {/* {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null} */}
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"><FaLock /></i>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {errors?.password && <p style={{ color: 'red' }}>{errors?.password}</p>}
              </div>
              <button className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-6 px-0 py-2 border-[none]" disabled={!isFormValid} onClick={handleSubmit} >SIGN IN</button>
              {/* <input className="" type="submit" value="SIGN IN" /> */}
            </form>

            <p className="text-sm text-gray-500">Create New account <Link href="/register">signup</Link></p>
          </div>
        </div>
      </div>

    </div>

  )
}
