"use client"
import 'react-toastify/dist/ReactToastify.css';
import "../login/login.css"
import { ChangeEvent, useState } from "react";
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'
// import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useAppSelector } from "@/store/hooks";
interface Errors {
  email: string;
  password: string;
}

export default function Login() {

  const storeTheme = useAppSelector((state) => state.theme);
  const textColorClass = storeTheme === 'dark' ? 'text-white' : 'text-[rgb(71,103,136)]';

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  // const { data, status } = useSession();
  // if (status === 'loading') return <h1> loading... please wait</h1>;
  // if (status === 'authenticated') {
  //   const user= data?.user?.email
  //   console.log(user,"user");
  //   console.log(data?.expires,"fdgfdgdf")

  // }
  // if(status==='unauthenticated'){
  //   console.log(data,"dfgd");

  // }


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
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailError = validateEmail();
    const passwordError = validatePassword();

    setErrors({ email: emailError, password: passwordError });
    setIsFormValid(emailError === '' && passwordError === '');
    if (emailError === '' && passwordError === '') {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/loginaapi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          toast.success("User logged in successfully!")
          localStorage.setItem("email",email)
          setEmail('')
          setPassword('')
          router.push("/")
        } else {
          toast.error("Invalid email or password")
          setEmail('')
          setPassword('')
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error("Error during login")
      }
      finally {
        setIsLoading(false); // Stop loader after API request completes
      }
      // const res = await signIn("credentials", {
      //   redirect: false,
      //   email: email,
      //   password: password,
      //   callbackUrl,
      // });

      // console.log(res);
      // if (!res?.error) {
      //   router.push(callbackUrl);
      // } else {
      //   // setErrors{("invalid email or password")};
      //   console.log("invalid email or password");

      // }

    } else {
      // alert("Form has errors. Please correct them.")
      toast.error('Form has errors. Please correct them.')
    }

  };

  return (
    <div className={`${storeTheme==="dark"?"bg-black duration-300 text-white":""}`}>
      <div className={`bg-slate-200 h-[570px] mt-[100px]`}>
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
        <div className={`grid place-items-center`}>
          <div className={`signup-form w-[480px] sm:w-[330px] ${textColorClass} shadow-[2px_4px_8px_#6b728040] text-center p-8 rounded-lg mt-[30px] `}>
            <div className="container">
              <div className="header mb-12">
                <h1 className={`font-[bolder] text-[28px] ${textColorClass}`}>Login Account</h1>
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
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder="Password"
                  />
                  {errors.password && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px' }} className="error-message">{errors.password}</p>}
                </div>
                <button
                  className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-2.5 px-0 py-2 border-[none]"
                  // disabled={isFormValid || isLoading}  
                  type="submit"
                  onClick={handleSubmit}
                >{
                    isLoading ? <center><RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="40s"
                      width="25"
                      visible={true}
                    /></center> : "SIGN IN"
                  }
                </button>
              </form>
              <p className={`text-sm ${textColorClass}`}>Create a new account?. <Link href="/register">Signup</Link></p>
              {/* <p>or Signup With </p> */}
              <button type='button' className={`google-btn shadow-[4px_2px_10px_rgba(0,0,0,0.2)] w-full rounded bg-white {textColorClass} text-base cursor-pointer mx-0 my-3 px-0 py-2 border-2 border-solid border-[black] hover:bg-[black] hover:text-[white]`} onClick={() => signIn("google")}>
                <FcGoogle className="inline text-xl mr-1.5 mb-[3px]" />Sign In With Google</button>
              <button type='button' className='github-btn shadow-[4px_2px_10px_rgba(0,0,0,0.2)] w-full rounded bg-white text-Black text-base cursor-pointer mx-0 my-3 px-0 py-2 border-2 border-solid border-[black] hover:bg-[black] hover:text-[white]' onClick={() => signIn("github")}>
                <FaGithub className="inline text-xl mr-1.5 mb-[3px]" />Sign In With Github</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
