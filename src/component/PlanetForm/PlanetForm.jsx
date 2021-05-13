import React from "react";
import styles from "./PlanetForm.module.scss";

const PlanetForm = (props) => {

  const { setName, setHasLife, setnoOfMoons, setType, addPlanet } = props;
  
  return (
    <>
      
      <div className={styles.Name}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onInput={e => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="hasLife">Has Life (True/False)</label>
        <input type="checkbox" name="hasLife" id="hasLife" onInput={e => setHasLife(e.target.checked)}/>
        <p></p>
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input type="text" name="type" id="type" onInput={e => setType(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="NoMoons">No Of Moons</label>
        <input type="text" name="NoMoons" id="NoMoons" onInput={e => setnoOfMoons(e.target.value)}/>
      </div>
      <button onClick={addPlanet}>Submit</button>
    </>
  );
};

export default PlanetForm;
