import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { List } from './components/List';
import { Item } from './components/Item';

function App() {

  const limit = 24;
  const [offset, setOffset] = useState(0);

  const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const [listPokemon, setListPokemon] = useState(null);

  const changeSearch = async (result) => {
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + result);
    const data = await response.json();

    setListPokemon(data); 
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      setListPokemon(data.results);
    }
  
    fetchData();
  }, [offset]);

  return (
    <>
      <nav>
        <Link className="nav-item" to="/">Pokedex</Link>
      </nav>

      <Routes>
        <Route index path="/" element={ <List listPokemon={listPokemon} changeSearch={changeSearch} /> } ></Route>
        <Route path="/item/:name" element={ <Item /> } ></Route>
      </Routes>

      <div className="pagination">
        {
          Array(9).fill().map((_,index) => (
            <a className="page" onClick={ () => setOffset(limit * index) }>{(index + 1)}</a>
          ))
        }
      </div>
    </>
  )
}

export default App

/*
  1. Mostrar contenido al cambiar de Link
  2. Hacer una búsqueda
  3. Hacer una paginación
*/