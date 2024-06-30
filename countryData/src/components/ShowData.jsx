import Notification from "./Notification";
import Country from "./Country";

const ShowData = ({filteredData,handleShow}) =>{
    if(filteredData === null  || filteredData === undefined){
        return null
    }
    if(filteredData.length > 10){
        return (
            <div>
                <Notification message="too many matches specify another"/>
            </div>
        )
    }else if(filteredData.length >1 && filteredData.length<10){
        return(
            <div>
                {filteredData.map(country => {
                    
                     return(<Country country={country} handleShow ={handleShow} key ={country.name.common} />)
                })}
            </div>
        )
    }
}
export default ShowData