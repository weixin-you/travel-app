import React from 'react'
import "./HeaderAndForm.css"

const HeaderAndForm = ({startAndEndDate, setStartAndEndDate, setWeatherData, cityName, setCityName, setImgSrc}) => {
    const getWeatherData = (e) => {
        e.preventDefault()
        if(cityName===""){
            window.alert("The city name field cannot be empty")
            return
        }

        const weatherBitKey = '7cf6ed38ae2148f1b6c4f7c5f4800e3d'
        const weatherBitUrl = 'https://api.weatherbit.io/v2.0/forecast/daily'
        let bitURL = `${weatherBitUrl}?city=${cityName}&key=${weatherBitKey}`

        const pixKey = '17198963-812b30f1b4baff708364953dc'
        const pixBaseUrl = 'https://pixabay.com/api/'
        let pixURL = `${pixBaseUrl}?key=${pixKey}&q=${cityName}`

        fetch(bitURL).then(res => res.json()).then(data => {
            setWeatherData(data.data)
        })

        fetch(pixURL).then(res => res.json()).then(data => {
            let randomNum = Math.floor(Math.random(data.hits.length))
            setImgSrc(data.hits[randomNum].webformatURL)
        })
  }
  const handleStartDate = (e) => {

      const currentDate = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
      if(e.target.value >= currentDate ){
        setStartAndEndDate(pre => ({...pre, startDate: e.target.value}))
      }else {
        setStartAndEndDate(pre => ({...pre, startDate: currentDate}))
      }
  }

  const handleEndDate = (e) => {
      const currentDate = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
      if(e.target.value >= startAndEndDate.startDate && e.target.value >= currentDate){
        setStartAndEndDate(pre => ({...pre, endDate: e.target.value}))
      }else {
        setStartAndEndDate(pre => ({...pre, endDate: currentDate}))

      }
  }
  
  return (
    <div className="headerandform">
        <h1 className="title">Travel App</h1>
        <form className="form" onSubmit={getWeatherData}>
            <div className="label-input">
                <label className="label" htmlFor="city">City name:</label>
                <input className="input"  type="text" id="city" onChange={(e) => setCityName(e.target.value)}/>
            </div>
            <div className="label-input" > 
                <label className="label" htmlFor="startdate">Start date:</label>
                <input className="input"  type="date" id="startdate" onChange={handleStartDate}/>
            </div>
            <div className="label-input">
                <label className="label" htmlFor="enddate">End date:</label>
                <input className="input"  type="date" id="enddate"  onChange={handleEndDate}/>
            </div>
           
            <button className="button"  onClick={getWeatherData}>
                Go
            </button>
        </form>
    </div>
  
  )
}

export default HeaderAndForm