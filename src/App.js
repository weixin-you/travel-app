import './App.css'
import {useState} from 'react'
import HeaderAndForm from './components/headerAndForm/HeaderAndForm'
import Weather from './components/weather/Weather'
function App() {

  const [weatherData, setWeatherData] = useState([])
  const [startAndEndDate, setStartAndEndDate] = useState({startDate: "", endDate: ""})
  const [cityName, setCityName] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  
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


