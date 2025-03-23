import CountryListItem from './CountryListItem'
import SingleCountryDisplay from './SingleCountryDisplay'

const CountriesDisplay = ({ countriesToShow }) => {
    if (countriesToShow === null) {
        return
    }
    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, please enter another filter
            </div>
        )
    } else if (countriesToShow.length === 1) {
        const country = countriesToShow[0]
        return <SingleCountryDisplay country={country} key={country.tld} />
    } else {
        return countriesToShow.map(country => <CountryListItem country={country} key={country.tld} />)
    }
}

export default CountriesDisplay