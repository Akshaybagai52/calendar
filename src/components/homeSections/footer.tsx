'use client'
import React from "react";
import Image from 'next/image'
import { useAppSelector } from "@/store/hooks";
const Footer = () => {
    const storeTheme = useAppSelector((state)=>state.theme)
    return (

        <footer className={`${storeTheme==="dark"?'bg-black text-white duration-300 border-t border-white':'bg-[#e6e6fa]'}`}>
        
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image src="https://flowbite.com/docs/images/logo.svg" width='30' height='30' className="h-8 me-3" alt="Calendar Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Calendar</span>
                        </a>
                    </div>
                    <div className="flex justify-around gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${storeTheme==="dark"?"text-white":"text-gray-900"}`}>Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Calendar</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${storeTheme==="dark"?"text-white":"text-gray-900"}`}>Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${storeTheme==="dark"?"text-white":"text-gray-900"}`}>Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Calendar</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>


    );
};
export default Footer;
