const Total = ({parts})=> {
     
       const sum = parts.reduce((sum,p) =>{
            
            
        return  sum + Number(p.exercises)
        
    },0)
    
    return(<>
    <p>Number of exercises {sum}</p>
    </>)
  }
  export default Total