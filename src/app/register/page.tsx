"use client"
import "../login/login.css"
import Link from "next/link"
import { useState } from "react"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
interface Errors {
    name: string;
    email: string;
    password: string;
}
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Errors>({ name: '', email: '', password: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateName = () => {
        let error = '';

        if (!name) {
            error = 'name is required.';
        } else if (name.length < 3) {
            error = 'Name should have at least three characters.';
          }
        return error;
    };
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
        if (field === 'name') {
            const nameError = validateName();
            setErrors({ ...errors, name: nameError });
        }

        if (field === 'email') {
            const emailError = validateEmail();
            setErrors({ ...errors, email: emailError });
        }

        if (field === 'password') {
            const passwordError = validatePassword();
            setErrors({ ...errors, password: passwordError });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const nameError = validateName();
        const emailError = validateEmail();
        const passwordError = validatePassword();

        setErrors({ name: nameError, email: emailError, password: passwordError });
        setIsFormValid(nameError === '' && emailError === '' && passwordError === '');

        if (nameError === '' && emailError === '' && passwordError === '') {
            // console.log('Form submitted successfully!');

            try {
                const response = await fetch('http://localhost:3000/api/addusers', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name, email, password }),
                });
        
                const data = await response.json();
                console.log(data?.error);
                
                if (response.ok) {
                  console.log('User registered successfully!');
                  setName('')
                  setEmail('')
                  setPassword('')
                  // Handle successful registration (redirect, display message, etc.)
                } else {
                  if (response.status === 409) {
                    console.error('User already exists.');
                    setName('')
                    setEmail('')
                    setPassword('')
                    // setErrors({ ...errors, email: 'User already exists.' });
                    alert(data?.error);
                  } else {
                    console.error('Registration failed');
                    alert('Registration failed');
                  }
                }
              } catch (error) {
                console.error('Error during registration:', error);
                alert('Error during registration');
              }

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
                                <h1 className="font-[bolder] text-[28px] text-indigo-500">Create an Account</h1>
                                {/* <p className="text-sm text-gray-500">Get started for free!</p> */}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="input ">
                                    <i className="fa-solid fa-user"><FaUser /></i>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => handleBlur('name')}
                                        placeholder="Username" />
                                    {errors.name && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.name}</p>}
                                </div>

                                <div className="input ">
                                    <i className="fa-solid fa-envelope"><FaEnvelope /></i>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email')} placeholder="Email" />
                                    {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.email}</p>}
                                </div>

                                <div className="input">
                                    <i className="fa-solid fa-lock"><FaLock /></i>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => handleBlur('password')} placeholder="Password" />
                                    {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.password}</p>}
                                </div>
                                <button
                                    className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-6 px-0 py-2 border-[none]"
                                    disabled={isFormValid}
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    SIGN UP
                                </button>
                            </form>
                            <p className="text-sm text-gray-500">Already have an account <Link href="/login">sign in</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
