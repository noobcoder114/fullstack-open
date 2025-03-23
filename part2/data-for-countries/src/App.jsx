import { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar'
import CountriesDisplay from './components/CountriesDisplay'
import countryService from './services/country'

function App() {
    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState(null)

    useEffect(() => {
        countryService
            .getCountryData()
            .then(response => {
                setCountries(response)
            })
    }, [])

    const handleSearch = (event) => {
        const input = event.target.value
        if (input === null) {
            return
        }
        const newCountries = countries.filter(country => {
            const lowerCountry = country.name.common.toLowerCase()
            return lowerCountry.includes(input)
        })
        setCountriesToShow(newCountries)
    }


    return (
        <>
        <Searchbar handleSearch={handleSearch} />
        <CountriesDisplay countriesToShow={countriesToShow} />
        </>
    )
}

export default App
