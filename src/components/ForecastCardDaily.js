/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ForecastCardDaily = ({ day }) => {
    const [weekDay, setWeekDay] = useState('')
    const [monthDay, setMonthDay] = useState('')

    const handleDate = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const dayNumber = new Date(day.dt * 1000).getDay()
        const dateNumber = new Date(day.dt * 1000).getDate()

        setWeekDay(days[dayNumber])
        setMonthDay(dateNumber)
    }

    useEffect(() => {
        handleDate();
    })

    return (
      <div>
        <Link to={`/hourly/${weekDay}`}>
          <p>{weekDay}</p>
        </Link>
        <p>{day.temp.max}</p>
        <p>{day.temp.min}</p>
        <p>{day.weather[0].main}</p>
        <p>{day.humidity}</p>
        <p>{monthDay}</p>
      </div>
    )
}

export default ForecastCardDaily;
