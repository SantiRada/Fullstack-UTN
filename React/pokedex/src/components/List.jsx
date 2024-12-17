import { useState } from 'react';
import { Card } from './Card';

export function List({listPokemon, changeSearch}){

    const [prevSearch, setPrevSearch] = useState('');

    const sendForm = () => { changeSearch(prevSearch); }

    return(
        <>
            <input
                type="text"
                placeholder="Buscar por Nombre o ID"
                value={prevSearch}
                onChange={(e) => setPrevSearch(e.target.value)}
            />
            <button onClick={ sendForm }>Buscar</button>
            <div className="container list">
                { listPokemon && listPokemon.length > 0 && listPokemon.map((item, index) => (
                    <Card key={index} item={item} />
                  ))
                }
                { listPokemon && listPokemon.length <= 0 && <p>Es un solo pokemon</p> }
            </div>
        </>
    );
}