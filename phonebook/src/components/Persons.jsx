import Person from "./Person";

const Persons = ({persons,handleDelete}) => {
    return(<div>
        {persons.map(person=> <Person key={person.id} handleDelete={handleDelete} person={person}/>)}
    </div>)

}
export default Persons