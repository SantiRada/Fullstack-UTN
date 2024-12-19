import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

export function Header ({ changeSearch }){

    const [prevSearch, setPrevSearch] = useState('');

    const change = (value) => {
        console.log("Set Search: " + value);
        setPrevSearch(value);
    }

    return(
        <div className="form-data container">
            <input
                type="text"
                placeholder="Buscar receta"
                className="input"
                value={ prevSearch }
                onChange={ (e) => change(e.target.value) }
            />
            <button className="button" onClick={ () => changeSearch(prevSearch) }><HiSearch size={18} /> Buscar</button>
        </div>
    );
}