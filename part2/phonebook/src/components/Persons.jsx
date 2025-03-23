import Person from './Person'

const Persons = ({ persons, setPersons, personsToShow, setPersonsToShow, renderPersons, setNotificationMessage, setNotificationStyle }) => 
    personsToShow.map(person => {
        return <Person 
            person={person} 
            key={person.id} 
            renderPersons={renderPersons}
            persons={persons} 
            setPersons={setPersons} 
            personsToShow={personsToShow}
            setPersonsToShow={setPersonsToShow}
            setNotificationMessage={setNotificationMessage}
            setNotificationStyle={setNotificationStyle} />}
    )

export default Persons