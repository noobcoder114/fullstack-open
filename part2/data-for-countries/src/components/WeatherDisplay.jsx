import axios from 'axios'
import { useState } from 'react'

const WeatherDisplay = ({ country }) => {
    const [temp, setTemp] = useState(null)
    const [icon, setIcon] = useState(null)
    const [wind, setWind] = useState(null)
    axios.get(`http://api.weatherapi.com/v1/current.json?key=4dead75bc12f48cf8ad155251252303&q=${country.name.common}`)
        .then(response => {
            const data = response.data
            console.log(data)
            setTemp(data.current.temp_c)
            setIcon(data.current.condition.icon)
            setWind(data.current.wind_kph)
        })

    return (
        <div>
            <h2>Weather in {country.name.common}</h2>
            <div>Temperature {temp} Celsius</div>
            <img src={icon} />
            <div>Wind {wind} km/h</div>
        </div>
    )
}

export default WeatherDisplay