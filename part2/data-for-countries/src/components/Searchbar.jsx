const Searchbar = ({ handleSearch }) => {
    return (
        <div>
            find countries<input onChange={handleSearch} />
        </div>
    )
}

export default Searchbar