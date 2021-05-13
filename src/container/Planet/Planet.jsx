import React from "react";
import styles from "./Planet.module.scss";
import PlanetTable from '../../component/PlanetTable';

const Planet = (props) => {
  const { planet } = props;

  const planetJSX = planet.map(planet => <PlanetTable planet={planet} />);
  return (
    <>
      <section className={styles.planetTable}>
        <div className={styles.planetHeaders}> 
          <p className={styles.name}>Name</p>
          <p className={styles.hasLife}>Has Life</p>
          <p className={styles.type}>Type</p>
          <p className={styles.moons}>No Of Moons</p>
        </div>
      {planetJSX}
      </section>
    </>
  );
};

export default Planet;
