import { FaCloudSun, FaCloudRain, FaSun, FaSnowflake, FaWind } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";

import './CardWeather.css';

export function IconWeather({state}){
    if(state == "Clouds") { return <FaCloudSun className="icon" /> }
    else if(state == "Rain") { return <FaCloudRain className="icon" /> }
    else if(state == "Snow") { return <FaSnowflake className="icon" /> }
    else if(state == "Wind") { return <FaWind className="icon" /> }
    else { return <FaSun className="icon" /> }
}

export function CardWeather({data}){

    console.log(data);

    return(
        <div className="card">
            <div className="left-content">
                <p className="icon-content"><IconWeather state={data.weather[0].main} /> {data.weather[0].main}</p>
                <h1>{data.main.temp}°C</h1>
            </div>
            <div className="right-content">
                <p className="city">{data.name}</p>
                <p className="subtitle"><LuWaves className="sub-icon" /> {data.main.sea_level}</p>
                <p className="subtitle"><FaDroplet className="sub-icon" /> {data.main.humidity}%</p>
                <p className="subtitle"><FaWind className="sub-icon" /> {data.wind.speed} m/s</p>
            </div>
        </div>
    );
}

// FaCloudSun = NUBLADO
// FaCloudRain == LLUVIOSO
// FaSun = SOLEADO
// FaSnowflake = NEVANDO
// FaWind = VENTOSO