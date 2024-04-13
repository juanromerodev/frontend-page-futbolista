import React, { useState, useEffect } from 'react';
import TablaFutbolistas from './components/TablaFutbolistas';
import './App.css';

function App() {
  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/futbolistas')
      .then(response => response.json())
      .then(data => setFutbolistas(data))
      .catch(error => console.error('Error del fetching en lectura de futbolistas:', error));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Futbolistas</h1>
      <TablaFutbolistas futbolistas={futbolistas} />
    </div>
  );
}

export default App;
