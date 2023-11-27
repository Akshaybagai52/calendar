"use client"
import "../login/login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { RotatingLines } from 'react-loader-spinner'

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
interface Errors {
    name: string;
    email: string;
    password: string;
}
export default function Register() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/addusers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });
                if (response.ok) {
                    toast.success("User registered successfully!")
                    router.push("/login")
                    setName('')
                    setEmail('')
                    setPassword('')
                } else {
                    if (response.status === 409) {
                        setName('')
                        setEmail('')
                        setPassword('')
                        toast.error('User already exists. try another email')
                    } else {
                        toast.error("Registration failed")
                    }
                }
            } catch (error) {
                toast.error("Error during registration")
            }
            finally {
                setIsLoading(false)
            }

        } else {
            toast.error("Form has errors. Please correct them.")
        }
    };

    return (
        <div>
            <div className="bg-slate-200 h-[570px]">
                <ToastContainer position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
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
                                    <input type="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => handleBlur('password')} placeholder="Password" />
                                    {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.password}</p>}
                                </div>
                                <button
                                    className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-6 px-0 py-2 border-[none]"
                                    // disabled={isFormValid || loading}
                                    type="submit"
                                    onClick={handleSubmit}
                                >{
                                    isLoading ? <center><RotatingLines
                                            strokeColor="white"
                                            strokeWidth="5"
                                            animationDuration="40s"
                                            width="25"
                                            visible={true}
                                        /></center> : "SIGN UP"
                                    }

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
