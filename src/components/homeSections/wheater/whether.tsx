import axios from "axios";
import Image from "next/image";
import moment from "moment";
import React, { useState } from "react";
import forcasting from "../../../assets/wheatherForecasting.png";
import { FaWind } from "react-icons/fa";
import { TbCloudStorm } from "react-icons/tb";
import { TbSunset2 } from "react-icons/tb";
import { WiSunrise } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";
import { LuDroplets } from "react-icons/lu";
import { TiArrowMaximise } from "react-icons/ti";
import { useAppSelector } from "@/store/hooks";

function Weather() {
  const storeTheme = useAppSelector((state) => state.theme);

  const [defaultCity, setDefaultCity] = useState("delhi");
  const [timeGap, setTimeGap] = useState("");
  const apiId = "f3324ce7f98a8c6b9e101be1570dfbfa";
  const [data, setData] = useState({
    city: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
    desc: "",
    icon: "",
    pressure: 0,
    windSpeed: 0,
    clouds: "",
    feels_Like: "",
    time: "",
  });

  const getData = (city: any) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f3324ce7f98a8c6b9e101be1570dfbfa`
      )
      .then((response) => {
        setData({
          desc: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          city: response.data.name,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          windSpeed: response.data.wind.speed,
          clouds: response.data.clouds.all,
          feels_Like: response.data.main.feels_like,
          time: response.data.timezone,
        });
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`)
        // axios.get(`http://api.weatherstack.com/forecast?access_key=b2f95e750eee63b5bb8447798f94a4cd&query=${city}`)
        //     .then((response) => {
        //         setData({
        //             desc: response.data.weather[0].description,
        //             icon: response.data.current.wheather_icons[0],
        //             city: response.data.location.name,
        //             temp: response.data.current.temperature,
        //             temp_max: response.data.main.temp_max,
        //             temp_min: response.data.main.temp_min,
        //             humidity: response.data.current.humidity,
        //             pressure: response.data.current.pressure,
        //             sunrise: response.data.forecast["2023-12-28"].astro.sunrise,
        //             sunset: response.data.forecast["2023-12-28"].astro.sunset,
        //             country: response.data.location.country,
        //             windSpeed: response.data.current.wind_speed,
        //             clouds: response.data.current.cloudcover,
        //             feels_Like: response.data.current.feelslike,
        //             time: response.data.location.localtime
        //         })
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTimeFromTimestamp = (timestamp: any) => {
    return moment.unix(timestamp).format("HH:mm:ss");
  };

  const handleOnChange = (e: { target: { value: any } }) => {
    clearTimeout(timeGap);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      getData(e.target.value);
    }, 500);
    setTimeGap("1000");
  };
  // getData()
  return (
    <div className={`${storeTheme === "dark" ? "bg-dark" : "bg-dark"}`}>
      <div className="container text-white shadow-[rgba(200,200,200,0.3)_0px_1px_2px_0px,rgba(200,200,200,0.15)_0px_1px_3px_1px] px-5  py-5 rounded-2xl h-[600px]">
        <div className="main_weather_box">
          <div className="flex justify-between">
            <div className="">
              <Image
                src={forcasting}
                width={100}
                height={80}
                alt="Wheater ForeCasting"
              />
            </div>
            <div>
              <h4>Calendar</h4>
            </div>
            <div>
              <h4>Wheater</h4>
            </div>
          </div>
          <div className="pt-[30px] w-full flex justify-center">
            <input
              className="inline-flex w-[90%] h-10 float-left text-[#ccc] bg-transparent px-[5px]  rounded-[3px_0_0_3px] border border-solid border-[white]"
              type="text"
              placeholder="Enter City Name..."
              onChange={handleOnChange}
            />
          </div>
          <div className="pt-[30px] !flex justify-evenly justify-items-center">
            <div className="w-[100%]">
              <h1 className="text-2xl tracking-normal text-[rgba(255,255,255,0.7)] font-semibold leading-none  m-00 pb-[30px]">
                {" "}
                Current Weather
              </h1>
              <div className="w-full">
                <div className="flex justify-between px-10">
                  <div className="">
                    <h2 className="text-[rgba(255,255,255,0.7)] ">
                      {data.city} {data.country}
                    </h2>
                    <p>{getTimeFromTimestamp(data.time)}</p>
                  </div>
                  <div>
                    <h2 className="text-[rgba(255,255,255,0.7)] ">
                      {data.temp} <span>°C</span>
                    </h2>
                    <p>{data.desc}</p>
                  </div>
                  <div>
                    <h1>Icon</h1>
                    {/* <Image src={`https://openweathermap.org/img/wn/${data.icon}.png`} alt="Wheater Icon" width={100} height={100} /> */}
                    {data.icon}
                  </div>
                </div>
              </div>
              <h1 className="pt-[50px] text-2xl tracking-normal text-[rgba(255,255,255,0.7)] font-semibold leading-none m-0 pb-[30px]">
                {" "}
                AIR CONDITIONS
              </h1>
              <div className="w-full">
                <div className="flex justify-between px-10 pb-5">
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <FaTemperatureLow />
                      </span>
                      Real Feel
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {data.feels_Like}°C
                    </p>
                  </div>
                  <div>
                    <h2 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <FaWind />
                      </span>
                      Wind
                    </h2>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {" "}
                      {data.windSpeed}m/s
                    </p>
                  </div>
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <TbCloudStorm />
                      </span>
                      Clouds
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {data.clouds}%
                    </p>
                  </div>
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <LuDroplets />
                      </span>
                      Humidity
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {data.humidity}%
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="pt-[50px] text-2xl tracking-normal text-[rgba(255,255,255,0.7)] font-semibold leading-none m-0 pb-[30px]">
                Additonal ForeCast
              </h1>
              <div className="w-full">
                <div className="flex justify-between px-10 pb-5">
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <WiSunrise />
                      </span>
                      Sunrise
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {getTimeFromTimestamp(data.sunrise)}
                    </p>
                  </div>
                  <div>
                    <h2 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <TbSunset2 />
                      </span>
                      Sunset
                    </h2>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {" "}
                      {getTimeFromTimestamp(data.sunset)}
                    </p>
                  </div>
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <FaTemperatureLow />
                      </span>
                      Pressure
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {data.pressure}
                    </p>
                  </div>
                  <div>
                    <h1 className="flex">
                      <span className="pr-1.5 pt-[3px]">
                        <TiArrowMaximise />
                      </span>
                      Max Tempreture
                    </h1>
                    <p className="text-[rgba(255,255,255,0.7)]">
                      {data.temp_max}% °C
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-[50%]">
                            <h4 className='pt-[50px] text-2xl tracking-normal text-[rgba(255,255,255,0.7)] font-semibold leading-none text-center m-0 pb-[30px]'>WEEKLY FORECAST
                            </h4>

         </div>*/}
         
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
