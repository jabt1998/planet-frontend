import React from "react";
import styles from "./Planet.module.scss";
import PlanetTable from '../../component/PlanetTable';

const Planet = (props) => {
  const { planet } = props;

  const planetJSX = planet.map(planet => <PlanetTable planet={planet} />);
  return (
    <>
     <section className={styles.planetTable}>
      {planetJSX}
      </section>
    </>
  );
};

export default Planet;
