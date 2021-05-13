import React from "react";
import styles from "./PlanetTable.module.scss";

const PlanetTable = (props) => {
  const { planet } = props
  return (
    <>
     <section className={styles.planetTable}>
      
      <p>{planet.name}</p>
      <p>{planet.hasKnownLife.toString()}</p>
      <p>{planet.type}</p>
      <p>{planet.noOfMoons}</p>
     </section>
    </>
  );
};

export default PlanetTable;
