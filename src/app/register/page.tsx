import "../login/login.css"
import Link from "next/link"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
export default function Register() {
    return (
        <div className="bg-slate-200 h-[570px]">

            <div className="grid place-items-center ">
                <div className="signup-form w-[480px] sm:w-[330px] bg-white shadow-[2px_4px_8px_#6b728040] text-center p-8 rounded-lg mt-[30px] ">
                    <div className="container">
                        <div className="header mb-12">
                            <h1 className="font-[bolder] text-[28px] text-indigo-500">Create an Account</h1>
                            {/* <p className="text-sm text-gray-500">Get started for free!</p> */}
                        </div>
                        <form>
                            <div className="input ">
                                <i className="fa-solid fa-user"><FaUser /></i>

                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input ">
                                <i className="fa-solid fa-envelope"><FaEnvelope /></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input">
                                <i className="fa-solid fa-lock"><FaLock /></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-6 px-0 py-2 border-[none]" type="submit" value="SIGN UP" />
                        </form>
                        {/* <p className="text-sm text-gray-500">Or sign up with</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i>
          </div> */}
                        <p className="text-sm text-gray-500">Already have an account <Link href="/login">sign in</Link></p>
                    </div>
                </div>
            </div>

        </div>

    )
}
