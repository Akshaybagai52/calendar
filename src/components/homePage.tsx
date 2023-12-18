"use client"
import React from "react"
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

const HomePage = () => {

    return (
        <>

            <Banner />
          
            <CheckDestination />
            <MillionUsers />
            <Toptabs />
            <Card />
            <Toptab2/>
            <Bottom />
            <Footer /> 
        </>
    )
}
export default HomePage;