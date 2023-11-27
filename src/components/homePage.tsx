"use client"
import React from "react"
import './homePage.css';
import Banner from "./homeSections/banner";
import BookingPlace from "./homeSections/bookingPlace";
import CheckDestination from "./homeSections/checkDestination";
const HomePage = () => {

    return (
        <>
            <Banner />
            {/* <BookingPlace /> */}
            <CheckDestination />
        </>
    )
}
export default HomePage;