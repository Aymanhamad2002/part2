import {useState,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Helper from './services/Helper'
import Notification from './components/Notification'

const App = () =>{
  const [persons,setPersons] = useState(null)
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterText,setFilterText] = useState(null)
  const [errorMessage,SetErrorMessage] = useState(null)
  const showPersons = filterText === null    ? persons : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
  
  const handleDelete =(id)=>{
    if(window.confirm(`Delete ${persons.filter(n => n.id === id)[0].name}`))
    {
    Helper
    .remove(id)
    .then(removeData => setPersons(persons.filter( person => person.id !== removeData.id)))
  }
}
  const handleFilterChange = (event)=>{
    setFilterText(event.target.value)
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
    
    
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addData = (e) =>{
    e.preventDefault()
    let alreadyAdded = false 
    let idToUpdate = -1
  
   const newItem = {name: newName , number : newNumber}
   persons.forEach(person => {
    if (person.name === newName ){
      alreadyAdded = true
      idToUpdate = person.id
    
   }
  })
  if(alreadyAdded){
    if(window.confirm(`${newItem.name} is already added to phonebook, replace the old number with a new one`)){
      Helper
      .update(idToUpdate,newItem)
      .then(updatedData => {
        setPersons(persons.map(person => person.id !== idToUpdate ? person : updatedData))})
      .catch((error)=>{
        SetErrorMessage(error.response.data.error)
       
        setTimeout(()=>SetErrorMessage(null),5000)
        setPersons(persons.filter(person => person.id !== idToUpdate))
      })
    }
  }
  else {
    Helper.create(newItem)
    .then((addedData)=>{
    setPersons(persons.concat(addedData))
    setNewName("")
    setNewNumber("")
    SetErrorMessage(`Added ${newItem.name}`)
    setTimeout(()=>SetErrorMessage(null),5000)
    })
    .catch((error)=>{
      SetErrorMessage(error.response.data.error)
       
      setTimeout(()=>SetErrorMessage(null),5000)
    })
    
  }

  }

  useEffect(()=>{
    Helper
    .getAll()
    .then(initialData => {
      
      setPersons(initialData)})

    
  },[])

  
  


  if(persons === null){
    return null
  }
  else{
  return(
  <div>
    <h2>Phonebook</h2>
    <Notification message ={errorMessage}/>
    <Filter handleFilterChange={handleFilterChange}/>
    <h3>Add a new</h3>
    <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}addData={addData} newName={newName} newNumber={newNumber} />
   
    <h2>Numbers</h2>
    <Persons persons = {showPersons} handleDelete={handleDelete} />
  </div>)
}
}

export default App
