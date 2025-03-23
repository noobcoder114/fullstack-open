import { useState } from 'react'
import SingleCountryDisplay from './SingleCountryDisplay'

const CountryListItem = ({ country }) => {
    const [showFullView, setShowFullView] = useState(false)

    const handleClick = () => {
        setShowFullView(!showFullView)
    }

    if (showFullView) {
        return (
            <SingleCountryDisplay country={country} />
        )
    }
    return (
        <li>{country.name.common} <button onClick={handleClick}>Show</button></li>
    )
} 

export default CountryListItem