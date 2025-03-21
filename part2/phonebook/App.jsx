import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('new name')
  const [names, setNames] = useState(['Arto Hellas'])
  const [newNumber, setNewNumber] = useState('new number')
  const [personsToShow, setPersonsToShow] = useState(persons)

  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
            const newPersons = persons.concat(response.data)
            setPersons(newPersons)
            setPersonsToShow(newPersons)
        })
  }, [])

  const handleFilter = (event) => {
    event.target.value.length > 0
    ? setPersonsToShow(persons.filter((person) => {
        const lowerPerson = person.name.toLowerCase()
        return lowerPerson.startsWith(event.target.value)
    }))
    : setPersonsToShow(persons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  } 

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    if (names.includes(newName)) {
        alert(`${newName} is already added to the phonebook`)
        return
    }
    setNames(names.concat(newName))
    const newPersonObject = {
        name: newName,
        number: newNumber
    }
    const newPersons = persons.concat(newPersonObject)
    setPersons(newPersons)
    setPersonsToShow(newPersons)
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
        <NewPersonForm
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
            onClick={handleNewPerson} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App