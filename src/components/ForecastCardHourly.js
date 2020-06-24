/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const ForecastCardHourly = ({ day, url }) => {
    const [currentCast, setCurrentCast] = useState('');

  const handleDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayNumber = new Date(day.dt * 1000).getDay()
    if (days[dayNumber] === url) {
      setCurrentCast(day)
    }
  }
    useEffect(() => {
      handleDate();
    })

    return (
      <div>
        {currentCast && currentCast.main.temp}
      </div>
    )
}

export default ForecastCardHourly;
