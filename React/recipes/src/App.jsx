import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Recipe } from './components/Recipe';

export default function App() {

  const [search, setSearch] = useState('');
  const [listRecipes, setListRecipes] = useState([]);

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const changeSearch = (value) => { setSearch(value); }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(API_URL + search);
        const data = await response.json();
  
        setListRecipes(data.meals);
      }catch (error) { console.log("Error Message: " + error); }
    }

    if(search) { fetchData(); }
  }, [search]);

  return (
    <>
    <Header search={search} changeSearch={changeSearch} />

    <Routes>
      <Route index path="/" element={ <Main listRecipes={listRecipes} /> }></Route>
      <Route path="/recipe/:id" element={ <Recipe /> }></Route>
    </Routes>
    </>
  )
}