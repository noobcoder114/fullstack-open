import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('new name')
  const [names, setNames] = useState(['Arto Hellas'])
  const [newNumber, setNewNumber] = useState('new number')
  const [personsToShow, setPersonsToShow] = useState(persons)

  const renderPersons = () => {
    phonebookService
        .getAll()
        .then(newPersons => {
            setPersons(newPersons)
            setPersonsToShow(newPersons)
            const newNames = newPersons.map((person) => {
                return person.name
            })
            setNames(newNames)
        })
  }

  useEffect(() => {
    renderPersons()
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

  const handleUpdate = (name, number) => {
    const person = persons.find(p => p.name === name)
    const changedPerson = { ...person, number: number}

    phonebookService.update(person.id, changedPerson)
        .then(() => {
            renderPersons()
        })
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(names)
    if (names.includes(newName)) {
        if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
            handleUpdate(newName, newNumber)
            return
        }
    }
    setNames(names.concat(newName))
    const newPersonObject = {
        name: newName,
        number: newNumber
    }
    phonebookService
        .create(newPersonObject)
        .then(returnedPerson => {
            const newPersons = persons.concat(returnedPerson)
            setPersons(newPersons)
            setPersonsToShow(newPersons)
            setNewName('')
            setNewNumber('')
        })
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
        <Persons 
            persons={persons} 
            setPersons={setPersons} 
            personsToShow={personsToShow} 
            setPersonsToShow={setPersonsToShow}
            renderPersons={renderPersons} />
    </div>
  )
}

export default App