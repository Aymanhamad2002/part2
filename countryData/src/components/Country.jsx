
const Country = ({country,handleShow}) =>{
    
    return (<div>{country.name.common}
    <button onClick = {()=>handleShow(country.name.common)} >show</button>
    </div>)
}
export default Country