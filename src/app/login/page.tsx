"use client"
import "../login/login.css"
import { useState } from "react"
import Link from "next/link"
import { FaEnvelope, FaLock } from "react-icons/fa";

interface Errors {
  email: string;
  password: string;
}

export default function Login() {
  // const [email, setEmail] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = () => {
    let error = '';

    if (!email) {
      error = 'email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = 'email is invalid.';
    }
    return error;
  };

  const validatePassword = () => {
    let error = '';
    if (!password) {
      error = 'Password is required.';
    } else if (password.length < 6) {
      error = 'Password must be at least 6 characters.';
    }
    return error;
  };

  const handleBlur = (field: String) => {
    if (field === 'email') {
      const emailError = validateEmail();
      setErrors({ ...errors, email: emailError });
    }

    if (field === 'password') {
      const passwordError = validatePassword();
      setErrors({ ...errors, password: passwordError });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const emailError = validateEmail();
    const passwordError = validatePassword();

    setErrors({ email: emailError, password: passwordError });
    setIsFormValid(emailError === '' && passwordError === '');

    if (emailError === '' && passwordError === '') {
      // console.log('Form submitted successfully!');
      
    } else {
      // console.log('Form has errors. Please correct them.');
      alert("Form has errors. Please correct them.")
    }
  };

  return (
    <div>
      <div className="bg-slate-200 h-[570px]">
        <div className="grid place-items-center ">
          <div className="signup-form w-[480px] sm:w-[330px] bg-white shadow-[2px_4px_8px_#6b728040] text-center p-8 rounded-lg mt-[30px] ">
            <div className="container">
              <div className="header mb-12">
                <h1 className="font-[bolder] text-[28px] text-indigo-500">Login Account</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <i className="fa-solid fa-envelope"><FaEnvelope /></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="Email"
                  />
                  {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.email}</p>}
                </div>
                <div className="input">
                  <i className="fa-solid fa-lock"><FaLock /></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder="Password"
                  />
                  {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.password}</p>}
                </div>
                <button
                  className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-6 px-0 py-2 border-[none]"
                  disabled={isFormValid}
                  type="submit"
                  onClick={handleSubmit}
                >
                  SIGN IN
                </button>
              </form>
              <p className="text-sm text-gray-500">Create a new account <Link href="/register">signup</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
