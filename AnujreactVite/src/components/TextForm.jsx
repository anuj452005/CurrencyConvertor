import React ,{useState} from 'react'

export default function TextForm(props){
    
const [text,setText]=useState('Enter text here ')
const handleUppercase=()=>{
    console.log("upeercase ")
}

const handleOnchange=(event)=>{
    console.log("upeercase ")
    setText(event.target.value);
}
//text to update karne ke liye function ka use karna hoga 
    return(
        <>
        <form>

        <div className="form-group">
            <h1>{props.heading}</h1>
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea value={text} onClick={handleUppercase} onChange={handleOnchange } className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className="btn btn-primary" >convert to the uppercase </button>
  
  
</form>

        </>
    )
}
