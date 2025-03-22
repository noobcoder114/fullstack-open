import phonebookService from '../services/phonebook'

const Person = (props) => {
    const person = props.person
    const handleDelete = (id) => {
        if (window.confirm(`Do you want to delete ${person.name} from the phonebook`)) {
            phonebookService.dlt(id)
                .then(() => {
                    alert(`${person.name} has been removed from the phonebook`)
                    props.renderPersons()
        })}
    }

    return (
        <p>
            {person.name} {person.number} <button onClick={() => handleDelete(person.id)} >delete</button>
        </p>
    )
}

export default Person