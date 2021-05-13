import React from "react";
import styles from "./PlanetForm.module.scss";

const PlanetForm = (props) => {

  const { setName, setHasLife, setnoOfMoons, setType, addPlanet } = props;
  
  return (
    <section className={styles.form}>      
      <div className={styles.Name}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onInput={e => setName(e.target.value)}/>
      </div>
      <div className={styles.hasLife}>
        <label htmlFor="hasLife">Has Life:</label>
        <input className={styles.checkbox} type="checkbox" name="hasLife" id="hasLife" onInput={e => setHasLife(e.target.checked)}/>
        <p></p>
      </div>
      <div className={styles.type}>
        <label htmlFor="type">Type:</label>
        <input type="text" name="type" id="type" onInput={e => setType(e.target.value)}/>
      </div>
      <div className={styles.moon}>
        <label htmlFor="NoMoons">No Of Moons:</label>
        <input type="text" name="NoMoons" id="NoMoons" onInput={e => setnoOfMoons(e.target.value)}/>
      </div>
      <button onClick={addPlanet}>Submit</button>
    </section>
  );
};

export default PlanetForm;
