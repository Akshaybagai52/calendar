"use client"
import React,{useState} from "react"
import './homePage.css';
import Banner from "./homeSections/banner";
// import BookingPlace from "./homeSections/bookingPlace";
import CheckDestination from "./homeSections/checkDestination";
import MillionUsers from "./homeSections/millionUser";
import Footer from "./homeSections/footer"
import Toptabs from "./homeSections/toptabs";
import Card from "./homeSections/card";
import Bottom from "./homeSections/bottom";
import Toptab2 from "./homeSections/toptab2";
import Weather from "./homeSections/wheater/whether";
import NotificationAlerts from "./notification/notificationAlerts";
// import { SlickSlider } from "./sliderBox/slider";

const HomePage = () => {
  
    return (
        <div>

            <Banner />
            <Weather />
            <CheckDestination />
            <MillionUsers />
            <NotificationAlerts/>
            <Toptabs />
            <Card />
            <Toptab2/>
            {/* <SlickSlider/> */}
            <Bottom />
            <Footer /> 
        </div>
    )
}
export default HomePage;