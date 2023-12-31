"use client"
import React from "react"
// import './homePage.css'
import 'react-calendar/dist/Calendar.css';
import {useAppSelector } from "@/store/hooks";
import bg_image from '../../assets/modern.jpg';
import { Marhey, Playfair_Display } from 'next/font/google'
import ReactCalendar from "../calendar";
import { Button } from "../buttons/buttons";

const marhey = Marhey({ weight: '600', subsets: ['latin'] })
const playfair_Display = Playfair_Display({ weight: '400', subsets: ['latin'] })


const Banner = () => {

    const storeTheme = useAppSelector((state) => state.theme);
  
    return (
        <>
            <div className="Home_page_main" style={{backgroundImage:`url(${bg_image.src})`}}>
                <div className="container">
                    <div className=" Home_page_sub-main">
                        <div className="sm:mx-auto sm:my-2 Home_page-heading w-[50%] ">
                            <h1  className={`${marhey.className} sm:text-[50px] text-[80px] text-white `}>Book your <br /><span className="">Meeting</span></h1>
                            {/* <button className={`${playfair_Display.className} sm:!text-[27px] Book-button`} onClick={()=>router.push('/bookingtoday')}>Book <span>Today</span></button> */}
                            <Button btnName="Booking Today" pathname="bookingtoday"/>
                        </div>
                        <div className=" sm:w-[100%] Home_page-calendat-image w-[50%]">
                            <div className="Home_page-calendar w-[100%]  h-[300px] ">
                             <ReactCalendar storeTheme={storeTheme}/>
                             
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Banner;