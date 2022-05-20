import './App.css'
import {useState, useEffect} from 'react'
import HeaderAndForm from './components/headerAndForm/HeaderAndForm'
import Weather from './components/weather/Weather'
function App() {

  const [weatherData, setWeatherData] = useState(JSON.parse(localStorage.getItem("weatherData")) || [])
  const [startAndEndDate, setStartAndEndDate] = useState(JSON.parse(localStorage.getItem("startAndEndDate")) || {startDate: "", endDate: ""})
  const [cityName, setCityName] = useState(JSON.parse(localStorage.getItem("cityName")) || "")
  const [imgSrc, setImgSrc] = useState(JSON.parse(localStorage.getItem("imgSrc")) || "")

  useEffect(() => {
    localStorage.setItem("weatherData", JSON.stringify(weatherData))
  }, [weatherData])
    localStorage.setItem("startAndEndDate", JSON.stringify(startAndEndDate))
    localStorage.setItem("cityName", JSON.stringify(cityName))
    localStorage.setItem("imgSrc", JSON.stringify(imgSrc))
  
  return (
    
    <div>
      <HeaderAndForm setWeatherData={setWeatherData} startAndEndDate={startAndEndDate} 
      setStartAndEndDate={setStartAndEndDate} cityName={cityName} setCityName={setCityName}
      setImgSrc={setImgSrc}
      />
      {weatherData.length > 0 && <Weather weatherData={weatherData} cityName={cityName} 
      startAndEndDate={startAndEndDate} imgSrc={imgSrc}
      />}
    </div>
   
  );
}

export default App;


