import React, { useEffect, useState } from 'react'
import dailyWeather from '../api/dailyWeather'
import ForecastCardDaily from '../components/ForecastCardDaily';

const Home = () => {
    const [result, setApiResult] = useState(null);
    const getApiResult = async () => {
        const response = await dailyWeather.get()
        setApiResult(response.data)
    }
    useEffect(() => {
        getApiResult()
    }, [])
    return (
      <div>
        {result && result.list.map((day) => <ForecastCardDaily day={day} />)}
      </div>
    )
}

export default Home;
