import Part from "./Part"
const Content = ({parts})=>{
    console.log(parts)
    return (<div>
     {
        parts.map((value,i)=>{
            
            return <Part key ={i} part={value.name} exercise ={value.exercises} />
        })
     }
    </div>)
  
  }
  export default Content