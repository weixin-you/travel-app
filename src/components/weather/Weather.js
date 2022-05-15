import React, {useState} from 'react'
import "./Weather.css"
const Weather = ({weatherData, cityName, startAndEndDate, imgSrc}) => {
    let filteredDays = weatherData.filter( item => {
        return item.datetime >= startAndEndDate.startDate && item.datetime <= startAndEndDate.endDate
    })
    let travelDays = filteredDays.map(day => {
        return (
            <div className='following-days' key={Math.random()}>
                <p>{day.datetime}</p>
                <p>{day.low_temp} ~ {day.high_temp}℃</p>
                <p>{day.weather.description}</p>
            </div>
        )
    })
    const first = weatherData[0]
    return (
        <>
            <div className='weather'>
                <img className="img" src={imgSrc} alt="nothing displayed" />
                <div className='details'>
                    <h2>Summary</h2>
                    <div className='infordetail'>
                        <p>Destination: {cityName}</p>
                        <p>Start Date: {startAndEndDate.startDate}</p>
                        <p>End Date: {startAndEndDate.endDate}</p>
                        <p>Description: {first.weather.description}</p>
                        <p>Temperatures(today): {first.low_temp} ~ {first.high_temp}℃ </p>
                    </div>
                </div>
            </div>
            <div className='etra'>
                {travelDays.length > 0 && <h2>Travel Days</h2>}
                {travelDays}
            </div>
        </>
            
    )
}

export default Weather