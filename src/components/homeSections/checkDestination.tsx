"use client";
import React, { ReactEventHandler, useEffect, useState } from "react";
import bg_image from "../../assets/offer-3.jpg";
import { fetcher } from "@/helpers/apiHelper";

import useSWR from "swr";
// import { StateNamesData } from "../countryNames/states";
// import { CityNamesData } from "../countryNames/cities";

import { v4 as uuidv4 } from "uuid";
import { Span } from "next/dist/trace";
uuidv4();


interface tokenProps {
  auth_token: string;

}
interface countryProps {
  country_name: string;

}

interface SearchValueProps {
  cityName: string;
  CountryName: string;
  stateName: string;
  checkInDate:string;
  checkOutDate:string;
}

const CheckDestination = () => {
  // const tokenGen: tokenProps
 const [tokenGen,setTokenGen]=useState<string | undefined>(undefined)

  const [searchValue, setSearchValue] = useState<SearchValueProps>({
    cityName: "",
    CountryName: "",
    stateName: "",
    checkInDate:'',
    checkOutDate:''
  });
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  }


 
//  const genrateToken=(setTokenGen: (token: string) => void) =>{
  
//   const { data:tokenData, error:errorToken } = useSWR(
//     "https://www.universal-tutorial.com/api/getaccesstoken",
//     (url) =>
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Accept": "application/json",
//         "api-token":"k930IlEKrjOFxEzaqgR9BMTXMBVRZwd0BcdAeAQNXWnSwpQvsFks50dt_FCtlo9og0Q",
//         "user-email":"satnamsingh85611@gmail.com"
//       },
//     })
//   );

// };

//  }
 







  const { data, error, isLoading } = useSWR(
    "https://www.universal-tutorial.com/api/countries",
    fetcher
  );
  if(error){
console.log(error,"get country")
  }

  const { data:item, error:errorItem, isLoading:isLoadingCheck } = useSWR(
    `https://www.universal-tutorial.com/api/states/`+`${searchValue.CountryName}`,
    fetcher
  );
  if(errorItem){
    console.log(errorItem,"get state")
      }

  const { data:item1, error:errorItem1, isLoading:isLoadingCheck1 } = useSWR(
    `https://www.universal-tutorial.com/api/cities/`+`${searchValue.stateName}`,
    
  );

  if(errorItem1){
    console.log(errorItem1,"get city")
      }

  const handleChangeInputElement = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };
  const handleChangeSelectElement = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  return (
    <>
      <div className="check_destination_main mt-[20px]  ">
        <div className="container">
          <div
            className="check_destination_sub-main"
            style={{ backgroundImage: `url(${bg_image.src})` }}
          >
            <form
              className="w-[400px] bg-[#00000075] p-3 text-white"
              onSubmit={handleSubmit}
            >
              <div className="destination_search my-5 relative ">
                <p className="my-2">Choose your country</p>
                <select
                  name="CountryName"
                  value={searchValue.CountryName}
                  className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]"
                  onChange={handleChangeSelectElement}
                >
                  <option>
                    {!searchValue.CountryName
                      ? "Select Country..."
                      : searchValue.CountryName}
                  </option>
                  {data instanceof Array && data?.map((ele: countryProps) => {
                    return (
                      <option key={uuidv4()} value={ele.country_name}>
                        {ele.country_name}
                      </option>
                    );
                  })}
                </select>
                <p className="my-2">Choose your state</p>
                <select
                  name="stateName"
                  value={searchValue.stateName}
                  className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]"
                  onChange={handleChangeSelectElement}
                >
                  <option>
                    {!searchValue.stateName
                      ? "Select stateName..."
                      : searchValue.stateName}
                  </option>
                  {item instanceof Array && item?.map((ele:any) => {
                    return (
                      <option
                        key={uuidv4()}
                        className="text-black"
                        value={ele?.state_name}
                      >
                        {ele?.state_name}
                      </option>
                    );
                  })}
                </select>
                <p className="my-2">Choose your city</p>
                <select
                  name="cityName"
                  value={searchValue.cityName}
                  className="text-black w-full mx-0 my-2.5 p-2 rounded-[7px]"
                  onChange={handleChangeSelectElement}
                >
                  <option>
                    {!searchValue.cityName
                      ? "Select stateName..."
                      : searchValue.cityName}
                  </option>
                  {item1 instanceof Array && item1?.map((ele: any) => {
                    return (
                      <option  key={uuidv4()} value={ele?.city_name}>
                        {ele?.city_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="dest_info ">
                <div className="flex gap-[20px]  ">
                  <div>
                    <label htmlFor="checkInDate "> Check in date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={searchValue.checkInDate}
                      id=""
                      className="border w-[100%] border-black text-black"
                      onChange={handleChangeInputElement}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOutDate "> Check out date</label>

                    <input
                      type="date"
                      name="checkOutDate"
                      value={searchValue.checkOutDate}
                      id=""
                      className="border w-[100%] border-black text-black "
                      onChange={handleChangeInputElement}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className=" submit_button border bg-white text-black "
                />
                {/* <button onClick={genrateToken}>Genrate Token</button> */}
                {/* {tokenGen && <span>{tokenGen}</span>} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckDestination;
