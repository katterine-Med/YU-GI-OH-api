import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php/?&num=30&offset=0&view=List";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => setCharacters(data.data))
      .catch(error => console.log(error))

  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Yu Gi OH App" />
      <div className="container mt-5">
        <Characters characters={characters}/>
      </div>

    </>
  );
}
/*<img src={logo} className="App-logo" alt="logo" />*/
export default App;
