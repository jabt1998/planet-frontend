import logo from './logo.svg';
import './App.module.scss';
import { useEffect, useState } from 'react';

const App = () => {

const [planet, setPlanet] = useState([])

const getPlanet = () => {
  let url = "https://jabt-planet-api.herokuapp.com/planets"

  fetch(url)
   .then(response => response.json())
    .then ((jsonResponse) => {setPlanet(jsonResponse)})
}

useEffect(() => {
  getPlanet()
})
  return (
    <div>
      <p>{planet}</p>
    </div>
  );
}

export default App;
