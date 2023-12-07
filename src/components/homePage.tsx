"use client"
import React from "react"
import './homePage.css';
import Banner from "./homeSections/banner";
// import BookingPlace from "./homeSections/bookingPlace";
import CheckDestination from "./homeSections/checkDestination";
import MillionUsers from "./homeSections/millionUser";
import Footer from "./homeSections/footer"
import Toptabs from "./homeSections/toptabs";
const HomePage = () => {

    return (
        <>
            <Banner />
            {/* <BookingPlace /> */}
            <CheckDestination />
            <MillionUsers/>
            <Toptabs/>
            <Footer />
        </>
    )
}
export default HomePage;