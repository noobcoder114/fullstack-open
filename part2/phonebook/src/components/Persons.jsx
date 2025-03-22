import Person from './Person'

const Persons = ({ persons, setPersons, personsToShow, setPersonsToShow, renderPersons }) => 
    personsToShow.map(person => {
        return <Person 
            person={person} 
            key={person.id} 
            renderPersons={renderPersons}
            persons={persons} 
            setPersons={setPersons} 
            personsToShow={personsToShow}
            setPersonsToShow={setPersonsToShow} />}
    )

export default Persons