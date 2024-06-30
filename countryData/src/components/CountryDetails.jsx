
const CountryDetails = ({country,weather})=>{
  
    

    let language = []
    for(let key in country.languages){
        language.push(country.languages[key])
    }
    
   
           
    return(
      
        <div>
            <h1>{country.name.common}</h1>
            <p>capital : {country.capital}</p>
            <p>area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {language.map(lang => <li key ={lang}>{lang}</li>)}
            </ul>
            
            <div><img src={country.flags.png}/></div>
            <h2>Weahter in {country.capital}</h2> 
            <p>temperature : {weather.main.temp} Celcius</p>
            <p>wind : {weather.wind.speed} m/s</p>
           
        </div>
     
    )

}
export default CountryDetails