import { useState } from 'react';
import './Header.css';
import { HiOutlineSearch, HiViewGridAdd } from "react-icons/hi";
import { Routes, Route, Link } from 'react-router-dom';

import { Documentation } from './../documentation/Documentation';

export function Header({setSearch, search, fetchBooks, listBooks }){

    const [focus, setFocus] = useState(false);

  const categoriasDeLibros = [
        "Ficción",
        "No Ficción",
        "Ciencia Ficción",
        "Fantasía",
        "Misterio",
        "Romance",
        "Biografías",
        "Historia",
        "Autoayuda",
        "Infantil"
    ];

    const submitForm = (e) => {
        e.preventDefault();
        setFocus(false);
        fetchBooks();
    }

    const submitCategory = (e) => {
        setSearch(e);
        setFocus(false);
        fetchBooks();
    }

    return(
        <>
            <header>
                <span>Book Searcher</span>
                <form className="input-sector" onSubmit={ (e) => submitForm(e) }>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="input"
                        value={search}
                        onChange={ (e) => setSearch(e.target.value) }
                        onFocus={ () => setFocus(true) }
                        onBlur={ () => setFocus(false) }
                    />
                    <HiOutlineSearch className="icon-search" />
                    { focus &&
                        <div className="dropdown">
                            {
                                listBooks.map((item, index) => (
                                    <a className="chip" key={index} href="#">{item.volumeInfo.title}</a>
                                ))
                            }
                        </div>
                    }
                </form>
                <Link className="nav-item" to='/docs'><HiViewGridAdd className='icon' /></Link>
            </header>
            <section className="list-chip">
                {
                    categoriasDeLibros.map((item, index) => (
                        <a key={index} className="chip" onClick={ () => submitCategory(item) }>{item}</a>
                    ))
                }
            </section>
            <Routes>
                <Route path="/docs" element={<Documentation />}></Route>
            </Routes>
        </>
    );
}