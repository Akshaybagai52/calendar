"use client"
import React, { ReactEventHandler, useEffect, useState } from "react";
import bg_image from '../../assets/offer-3.jpg'
import { countriesData } from "../countryNames/countries";
import { StateNamesData } from "../countryNames/states";
import { CityNamesData } from "../countryNames/cities";
import { stringify } from "json5";
import { any } from "prop-types";

interface country {
    country_name: String
}
interface city {
    city_name: String
}
interface state {
    state_name: String
}


interface SearchValue {
    cityName: string;
    CountryName: string;
    stateName: string;
}

const CheckDestination = () => {
    const [countryNames, setCountryNames] = useState<country[]>([]);
    const [cityNames, setCityNames] = useState<state[]>([])
    const [stateNames, setStatesNames] = useState<city[]>([])

    const [searchValue, setSearchValue] = useState<SearchValue>({
        cityName: '',
        CountryName: '',
        stateName: ''
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }

    // console.log(countriesData(),"oo")
    useEffect(() => {
        const fetchData = async () => {
            let Data = await countriesData()
            setCountryNames(Data)
        }
        fetchData()

    }, [])


    useEffect(() => {
        let stateValue: String = searchValue.stateName;
        let countryValue: String = searchValue.CountryName;
        const fetchData1 = async () => {
            if (stateValue) {
                console.log("cobnhhh", stateValue)
                let data = await CityNamesData(stateValue);
                console.log(data, "searchValue.CountryName");
                setCityNames(data)
            }else if (countryValue) {
                console.log("cobnhhh", countryValue)
                let data = await StateNamesData(countryValue);
                setStatesNames(data)
            }else{
                console.log("not found")
            }

        }
        fetchData1();
       
       
    }, [searchValue]);

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target
        setSearchValue({ ...searchValue, [name]: value })
    }

    return (
        <>
            <div className="check_destination_main mt-[20px]  "  >
                <div className="container">
                    <div className="check_destination_sub-main" style={{ backgroundImage: `url(${bg_image.src})` }}>


                        <form className="w-[400px] bg-[#00000075] p-3 text-white" onSubmit={handleSubmit}>
                            <div className="destination_search my-5 relative ">
                                <p className="my-2">Choose your country</p>
                                <select name="CountryName" value={searchValue.CountryName} className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]" onChange={handleChange}>
                                    <option>{!searchValue.CountryName ? "Select Country..." : searchValue.CountryName}</option>
                                    {
                                        countryNames?.map((ele: country, index: number) => {

                                            return (
                                                <option key={index} value={ele.country_name}>
                                                    {ele.country_name}
                                                </option>
                                            )
                                        })

                                    }
                                </select>
                                <p className="my-2">Choose your state</p>
                                <select name="stateName" value={searchValue.stateName} className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]" onChange={handleChange}>
                                    <option>{!searchValue.stateName ? "Select stateName..." : searchValue.stateName}</option>
                                    {
                                        stateNames?.map((ele: state, index: number) => {

                                            return (


                                                <option key={index} className="text-black" value={ele?.state_name} >{ele?.state_name}</option>

                                            )
                                        })

                                    }
                                </select>
                                <p className="my-2">Choose your city</p>
                                <select name="cityName" value={searchValue} className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]" onChange={handleChange}>
                                    <option>Select cityName...</option>
                                    {
                                        cityNames?.map((ele: city, index: number) => {

                                            return (

                                                <option key={index} value={ele?.city_name} >{ele?.city_name}</option>
                                            )
                                        })

                                    }
                                </select>
                               
                            </div>
                            <div className="dest_info " >
                                <div className="flex gap-[20px]  ">
                                    <div>
                                        <label htmlFor="checkin_date "> Check in date</label>
                                        <input type="date" name="checkin_date" id="" className="border w-[100%] border-black text-black" />

                                    </div>
                                    <div>

                                        <label htmlFor="checkin_date "> Check out date</label>

                                        <input type="date" name="checkout_date" id="" className="border w-[100%] border-black text-black " />
                                    </div>

                                </div>
                                {/* 
                                <div className="hotel_box flex gap-3 justify-between my-2 ">
                                    
                                    <div>
                                        <label htmlFor="adult" className="">Adult</label>
                                        <input type="number" name="adult" id="" className="border w-[100px]  text-black  border-black" />
                                    </div>


                                    <div>
                                        <label htmlFor="children" className="">Children</label>
                                        <input type="number" name="children" id="" className="border  w-[100px] border-black  text-black" />
                                    </div>

                                </div> */}

                                <input type="submit" value="Search" className=" submit_button border bg-white text-black " />

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckDestination