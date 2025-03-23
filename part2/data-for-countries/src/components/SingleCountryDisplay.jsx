import WeatherDisplay from './WeatherDisplay'

const SingleCountryDisplay = ({ country }) => {
    let languageList = []
    for (const [_, value] of Object.entries(country.languages)) {
        languageList.push(value)
    }
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {languageList.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} />
            <WeatherDisplay country={country}/>
        </div>
    )
}

export default SingleCountryDisplay