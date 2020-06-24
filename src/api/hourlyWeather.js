import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c2126ddbad599441b6b459bc90a0ec70',
})