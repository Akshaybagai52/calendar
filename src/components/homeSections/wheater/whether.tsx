import axios from 'axios'
import Image from 'next/image'
import moment from 'moment'
import React, { useState } from 'react'


function Weather() {
    const [defaultCity, setDefaultCity] = useState('delhi');
    const [timeGap, setTimeGap] = useState("")
    const [data, setData] = useState({
        city: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
        desc:"",
        icon:'',
        pressure:0,
        windSpeed:0
    })
    const getData = (city: any) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d8596b1261b43be39522177d29112a96`)
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
                    windSpeed: response.data.wind.speed
                })
                console.log(response);
            })
            
    }

    const handleOnChange = (e: { target: { value: any } }) => {
        clearTimeout(timeGap)
        const timeout = setTimeout(() => {
            getData(e.target.value)

        }, 500)
        setTimeGap('1000')
    }
    // getData()
    return (
        <div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className='container'>
                <div className="card">
                    <div className="inputData">
                        <input
                            type="text"
                            className='inputField'
                            placeholder='Enter City Name'
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="city">
                        <h3><i className="fa-sharp fa-solid fa-location-dot"></i> {data.city}  {data.country}</h3>
                    </div>
                    <div className="info">
                        <h2>{data.temp} °C</h2>
                    </div>
                    <div className="boxes">
                        <div className="box"><h4>Max Temp:-{data.temp_max} °C</h4>
                            <div className="border">
                            </div>
                            {/* <h3>{data.temp_max} °C</h3> */}
                        </div>
                        <div className="box"><h4>Min Temp:-{data.temp_min}</h4>
                            <div className="border">
                            </div>
                            {/* <h3>{data.temp_min} °C</h3> */}
                        </div>
                        <div className="box"><h3>Wind Speed:-{data?.windSpeed}</h3>
                            <div className="border">
                            </div>
                            {/* <h3>{data.windSpeed}</h3> */}

                            <div className="box"><h3>Feels Like</h3>
                                <div className="border">
                                </div>
                                <h3>{data.desc}</h3>
                                <div className="box rise"><h3>Sunrise</h3>
                                    <div className="border">
                                    </div>
                                    <h3>{moment(data.sunrise * 1000).format("hh:mm a")}</h3>
                                </div>
                                <div className="box"><h3>Sunset</h3>
                                    <div className="border">
                                        {/* <Image src={sunset} className="img" alt="sunset" /> */}
                                    </div>
                                    <h3>{moment(data.sunset * 1000).format("hh:mm a")}</h3>
                                </div>
                                <div className="box"><h3>Pressure</h3>
                                    <div className="border">
                                        {/* <Image src={pressure} className="img" alt="pressure" /> */}
                                    </div>
                                    <h3>{data.pressure}</h3>
                                    <div className="box"><h3>Humidity</h3>
                                        <div className="border">
                                            {/* <Image src={humidity} className="img" alt="humidity" /> */}
                                        </div>
                                        <h3>{data.humidity}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 export default Weather;