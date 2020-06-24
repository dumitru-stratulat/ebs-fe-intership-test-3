import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&units=metric&appid=886705b4c1182eb1c69f28eb8c520e20',
})