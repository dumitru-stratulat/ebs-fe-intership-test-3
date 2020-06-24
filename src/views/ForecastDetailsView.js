/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import hourlyWeather from '../api/hourlyWeather'
import ForecastCardHourly from '../components/ForecastCardHourly';

const ForecastDetailsView = ({ match: { params: { url } } }) => {
    const [result, setApiResult] = useState(null);

    const getApiResult = async () => {
        const response = await hourlyWeather.get()
        await setApiResult(response.data)
    }

    useEffect(() => {
      getApiResult()
    }, [])

    return (
      <div>
        {result && result.list.map((day) => <ForecastCardHourly day={day} url={url} key={day.dt} />)}
      </div>
    )
}

export default ForecastDetailsView;
