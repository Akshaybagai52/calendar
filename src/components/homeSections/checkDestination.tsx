"use client"
import React, { ReactEventHandler, useEffect, useState } from "react";
import bg_image from '../../assets/offer-3.jpg'
import { countriesData } from "../countryNames/countries";
import { StateNamesData } from "../countryNames/states";
const CheckDestination = () => {
    const [countryNames, setCountryNames] = useState<Object>([])
    const [cityNames, setCityNames] = useState<Object>([])
    const [stateNames, setStatesNames] = useState<Object>([])

    const [searchValue, setSearchValue] = useState<string>({
        cityName: '',
        CountryName: '',
        stateName: ''

    })

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fix the typo: preventDefault() instead of preventDefalult()
        // const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${!searchValue ? "chandigrah" : searchValue}`, {
        //     method: 'GET',
        //     headers: {
        //         // 'X-Api-Key': 'fPZEXwG1Bg/v5vsJ37ipwA==YCcMwFAlBYgdE6RP'
        //         'X-Api-Key': 'k930IlEKrjOFxEzaqgR9BMTXMBVRZwd0BcdAeAQNXWnSwpQvsFks50dt_FCtlo9og0Q'
        //     },
        // });
    }

// console.log(countriesData(),"oo")
    useEffect(() => {
        const fetchData=async()=>{
          let Data=  await countriesData()
        
          setCountryNames(Data)
        }
        fetchData()
   
    }, [])
  

    useEffect(() => {
        let countryValue = searchValue.CountryName;
        console.log(countryValue,"nn")
        const fetchData1 = async () => {
           
           if(countryValue){
            console.log("cobnhhh", countryValue)
            let data =await StateNamesData(countryValue);
            console.log(data, "searchValue.CountryName");
            setStatesNames(data)
           }
          
        }
        fetchData1();
     }, [searchValue.CountryName]);

    // console.log(citiesFind,"searchValue")
    const handleChange =async (e) => {
        const { value,name} = e.target
        setSearchValue({...searchValue,[name]:value})
  
       
    }
console.log(stateNames,"stateNames")

    return (
        <>
            <div className="check_destination_main mt-[20px]  "  >
                <div className="container">
                    <div className="check_destination_sub-main" style={{ backgroundImage: `url(${bg_image.src})` }}>


                        <form className="w-[400px] bg-[#00000075] p-3 text-white" onSubmit={handleSubmit}>
                            <div className="destination_search my-5 relative ">
                                <p className="my-2">Choose your City</p>
                                <select name="CountryName" value={searchValue.CountryName} className="text-black" onChange={handleChange}>
                                <option>{!searchValue.CountryName?"Select Country...":searchValue.CountryName}</option>
                                    {
                                        countryNames?.map((ele) => {
                                            
                                            return (
                                                <>

                                                    <option value={ele?.country_name} >{ele?.country_name}</option>
                                                </>
                                            )
                                        })

                                    }
                                </select>
                                <select name="stateName" value={searchValue.stateName} className="text-black" onChange={handleChange}>
                                <option>{!searchValue.stateName?"Select stateName...":searchValue.stateName}</option>
                                    {
                                        stateNames?.map((ele) => {
                                            
                                            return (
                                                <>

                                                    <option className="text-black"  value={ele?.state_name} >{ele?.state_name}</option>
                                                </>
                                            )
                                        })

                                    }
                                </select>
                                <select name="cityName" value={searchValue} className="text-black" onChange={handleChange}>
                                <option>Select cityName...</option>
                                    {
                                        countryNames?.map((ele) => {
                                            
                                            return (
                                                <>

                                                    <option value={ele?.country_name} >{ele?.country_name}</option>
                                                </>
                                            )
                                        })

                                    }
                                </select>
                                {/* <input type="text" value={searchValue} placeholder="checkdestnation ..." className="border text-black border-black w-[100%] p-2 rounded" onChange={handleChange} />
                                {
                                    citiesFind && <div className="absolute top-[76px] right-0 left-0 overflow-scroll h-[200px]">
                                        <ul className="">
                                            {citiesFind?.map((ele, index) => {
                                                return (
                                                    <div className="bg-white text-black p-2" key={index}>
                                                        <li className="cursor-pointer" onClick={() => [setSearchValue(ele), setCitiesFind(null)]}>{ele}</li>
                                                    </div>
                                                )


                                            })}
                                        </ul>
                                    </div>
                                } */}
                            </div>
                            <div className="dest_info " >
                                <div className="flex gap-[20px]  ">
                                    <div>
                                        <label htmlFor="checkin_date "> Check in date</label>
                                        <input type="date" name="checkin_date" id="" className="border w-[80%] border-black text-black" />

                                    </div>
                                    <div>

                                        <label htmlFor="checkin_date "> Check out date</label>

                                        <input type="date" name="checkout_date" id="" className="border w-[80%] border-black text-black " />
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