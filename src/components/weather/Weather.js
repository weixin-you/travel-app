import React from 'react'
import "./Weather.css"
const Weather = ({weatherData, cityName, startAndEndDate, imgSrc}) => {
    const first = weatherData[0]
    return (
            <div className='weather'>
                <img className="img" src={imgSrc} alt="nothing displayed" />
                <div className='details'>
                    <h2>Summary</h2>
                    <div className='infordetail'>
                        <p>Destination: {cityName}</p>
                        <p>Start Date: {startAndEndDate.startDate}</p>
                        <p>End Date: {startAndEndDate.endDate}</p>
                        <p>Description: {first.weather.description}</p>
                        <p>Temperatures: {first.low_temp} ~ {first.high_temp}℃ </p>
                    </div>
                </div>
        </div>
      
    )
}

export default Weather