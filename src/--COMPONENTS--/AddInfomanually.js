import React, { useState } from "react";
import "./AddInfomanually.css";
export default function AddInfomanually(props) {
  const [formData, setFormData] = useState({
    tital: "",
    openingText: "",
    releaseDate: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitForm() {
    props.addmovie(formData);
  }
  return (
    <div>
      <form>
        <div className="tital">
          <label className="label-tital" for="tital">
            Tital{" "}
          </label>
          <input
            className="input-tital"
            type="text"
            name="tital"
            onChange={handleChange}
          />
        </div>
        <div className="openingText">
          <label className="label-tital" for="openingText">
            Opening Text{" "}
          </label>
          <input
            className="input-openingText"
            type="text"
            name="openingText"
            onChange={handleChange}
          />
        </div>
        <div className="releaseDate">
          <label className="label-tital" for="releaseDate">
            Release Date{" "}
          </label>
          <input
            className="input-releaseDate"
            type="text"
            name="releaseDate"
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={submitForm}>Add Movie </button>
    </div>
  );
}
