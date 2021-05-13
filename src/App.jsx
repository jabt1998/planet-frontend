import logo from './logo.svg';
import styles from'./App.module.scss';
import { useEffect, useState } from 'react';
import PlanetTable from './component/PlanetTable';
import Planet from './container/Planet';
import PlanetForm from './component/PlanetForm';




const App = (props) => {

const [planet, setPlanet] = useState([])
const [name, setName] = useState("")
const [hasLife, setHasLife] = useState(Boolean)
const [type, setType] = useState("")
const [noOfMoons, setnoOfMoons] = useState(true)

console.log(setName)



let url = "https://jabt-planet-api.herokuapp.com/planets"

const getPlanet = () => {

  fetch(url)
   .then(response => response.json())
    .then ((jsonResponse) => {setPlanet(jsonResponse)})
}

const addPlanet = () => {

  fetch("https://jabt-planet-api.herokuapp.com/planets", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', },
    body: JSON.stringify({    
      name: name,
      hasKnownLife: hasLife,
      type: type ,
      noOfMoons: noOfMoons
    })})
    .then( response => response.json())
     .then(() => getPlanet())
   }



useEffect(() => {
  getPlanet()
}, [])
  return (
    
    <section className={styles.body}>
      <h2 className={styles.planetHeader}>Planet API</h2>     
      <section className={styles.table}>
        <Planet planet={planet} />
      </section>
      <PlanetForm setName={setName}  setHasLife={setHasLife} setType={setType} setnoOfMoons={setnoOfMoons} addPlanet={addPlanet}/>
      
    </section>
  );
}

export default App;
