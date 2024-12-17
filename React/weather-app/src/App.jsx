import { useState } from 'react';
import { FormWeather } from "./components/FormWeather";
import { CardWeather } from "./components/CardWeather";

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
   
  const newCity = (value) => { setCity(value.toLowerCase()); }

  const API_KEY = "4442e65e990ce4eba658655e709a4768";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const CallAPI = async () => {
      const response = await fetch(API_URL);
      setData(await response.json());
  }

  return (
    <>
      { data ? <CardWeather data={data} /> : <FormWeather city={city} newCity={newCity} CallAPI={CallAPI} /> }
    </>
  )
}

export default App
