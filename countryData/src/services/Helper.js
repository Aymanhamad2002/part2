import axios from 'axios'
const api_key =import.meta.env.VITE_SOME_KEY
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const baseUrl2 = "https://studies.cs.helsinki.fi/restcountries/api/name/";
const baseUrl3 = "https://api.openweathermap.org/data/2.5/weather?"


 const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const getCountryByName = (name) =>{
    const fullUrl = `${baseUrl2}/${name}`
    const request = axios.get(fullUrl)
    return request.then(response => response.data)
    
}
const getWeatherByName =(lat,lon) =>{
        const fullUrl =`${baseUrl3}lat=${lat}&lon=${lon}&appid=${api_key}`
        const request = axios.get(fullUrl)
        return request.then(response => response.data)
}
export default {
    getAll,
    getCountryByName,
    getWeatherByName,
}
