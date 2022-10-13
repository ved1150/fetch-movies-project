import React, { useState } from "react";
import "./AddInfomanually.css";
export default function AddInfomanually() {

const [formData , setFormData] = useState({
    tital : "",
    openingText : "" ,
    releaseDate : ""
})

function handleChange(event) {
    // event.preventdefault()
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
    console.log(formData)
}
function saveFormData(event) {
    console.log(formData)
    

}
  return (
    <div>
      <form  onsubmit="return false">
        <div className="tital">
          <label className="label-tital" for="tital">Tital </label>
          <input 
          className="input-tital"
           type="text" 
           name="tital" 
           onChange={handleChange}
           />
        </div>
        <div className="openingText">
          <label className="label-tital" for="openingText">Opening Text </label>
          <input className="input-openingText" type="text" name="openingText" onChange={handleChange} />
        </div>
        <div className="releaseDate">
          <label className="label-tital" for="releaseDate">Release Date </label>
          <input className="input-releaseDate" type="text" name="releaseDate" onChange={handleChange} />
        </div>
      </form>
       <button onClick={saveFormData}>Add </button>
    </div>
  );
}
