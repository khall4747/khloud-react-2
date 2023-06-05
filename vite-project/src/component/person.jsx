
import Company from "./company"
export default function person(props) {
  return (
    <div className='pr'>
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <p>{props.lang}</p>
        <p>{props.year}</p>
       <Company company={props.company}></Company>
       <Company serves={props.serves}></Company>
    </div>
  )
}

