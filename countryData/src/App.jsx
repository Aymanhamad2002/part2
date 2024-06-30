import { useState,useEffect } from "react";
import Helper from "./services/Helper";
import Filter from "./components/Filter";
import CountryDetails from "./components/CountryDetails";
import ShowData from "./components/ShowData";

const App = () =>{
  const [countries,setCountries] = useState(null)
  const [FilterText,setFilterText] = useState(null)
  const [showSpecific,setShowSpecific] = useState(null)
  const [weather,setWeather] = useState(null)
  /*let weather = {};
  const [lat,long] = country.latlng
  Helper.getWeatherByName(lat,long).then(returnedData => {Object.assign(weather,returnedData)
      console.log(weather)
  }

  )*/


  const handleShow = (name) =>{
    Helper
    .getCountryByName(name)
    .then(returnedData =>{
      const [lat,long] = returnedData.latlng
      Helper.getWeatherByName(lat,long).then(weatherReturned => 
        {
          setWeather(weatherReturned)
          setShowSpecific(returnedData)
        }
    )
    
      
     

    })


    

  }
  const handleFilterText = (event) =>{
    setFilterText(event.target.value)
  }
  let filteredData = null;
  if(FilterText!== null){
    filteredData = countries.filter(country => country
      .name.common
      .toLowerCase()
      .includes(FilterText.toLowerCase()))
      if(filteredData.length ===1){
        const [lat,long] = filteredData[0].latlng
        Helper.getWeatherByName(lat,long).then(weatherReturned => {
          setWeather(weatherReturned)
          setShowSpecific(filteredData[0])}
        )
        

      }
    
  }
  useEffect(()=>{
    Helper
    .getAll()
    .then(initialData => setCountries(initialData))

  },[])
  
  
  

  if(countries === null){
    return null
  }
  
  else{
    if(showSpecific===null){
    return(<div>
      <Filter  handleFilterText={handleFilterText}/>
      <ShowData filteredData={filteredData} handleShow={handleShow} />
    </div>)}
    else if(showSpecific!== null && weather !== null){
      return(<div>
        <Filter  handleFilterText={handleFilterText}/>
        <ShowData filteredData={filteredData} handleShow={handleShow} />
        <CountryDetails country={showSpecific} weather={weather}  />
      </div>)

    
  }}

}
export default App
