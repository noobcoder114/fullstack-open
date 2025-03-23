import axios from 'axios'

const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountryData = () => {
    const request = axios.get(countryUrl)
    return request.then(response => response.data)
}

export default { getCountryData }