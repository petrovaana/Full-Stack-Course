import { useState } from 'react'

const Person = ({ person }) => {
  return <li>{person.name} {person.number}</li>
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, id) =>
        <Person key={id} person={person} />
      )}
    </ul>
  )
}

const PersonForm = ({ addPerson, newName, handleNewName, newNumber, handleNewNumber}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameUsed = persons.some(
      person => person.name == newName
    )

    if (nameUsed) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = { 
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        />
        <h2>Numbers</h2>
        <Persons persons={persons} />
        </div>
  )
}

export default App
