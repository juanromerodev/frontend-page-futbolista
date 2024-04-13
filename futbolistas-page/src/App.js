
import React, { useState, useEffect } from 'react';
import TablaFutbolistas from './components/TablaFutbolistas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { encode } from "base-64";

function App() {
  const [futbolistas, setFutbolistas] = useState([]);
  const [numPagina, setNumPagina] = useState(0);

  useEffect(() => {
    let name = 'admin';
    let password = 'main';

    fetch(`http://localhost:8081/futbolistas?page=${numPagina}&size=3`, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + encode(`${name}:${password}`)
      }
    })
      .then(response => response.json())
      .then(data => setFutbolistas(data))
      .catch(error => console.error('Error del fetching en lectura de futbolistas:', error));
  }, [numPagina]);

  const incrementarPagina = () => {
    if (numPagina <3) {
      setNumPagina(prevNumPagina => prevNumPagina + 1);
    }
  };

  const decrementarPagina = () => {
    if (numPagina > 0) {
      setNumPagina(prevNumPagina => prevNumPagina - 1);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Futbolistas</h1>
      <TablaFutbolistas futbolistas={futbolistas} />
      <div>
        <button onClick={decrementarPagina}>Página Anterior</button>
        <button onClick={incrementarPagina}>Página Siguiente</button>
      </div>
    </div>
    
  );

  
}


export default App;
