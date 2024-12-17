import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Item(){
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    useEffect(() => {
        const dataPokemon = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();

            setPokemon(data);

            console.log(data.abilities);
        }

        dataPokemon();
    }, []);

    return(
        <>
        { pokemon && 
            <div className="container item">
                <div className="content-img">
                    <img className="img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <img className="gif" src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
                </div>
                <div className="info">
                    <small>#00{pokemon.id}</small>
                    <h2 className="name">{pokemon.name}</h2>
                    <div className="specific-info">
                        <p className="text"><span>Altura:</span> {pokemon.height / 10}m</p>
                        <p className="text"><span>Peso:</span> {pokemon.weight}kg</p>
                    </div>
                    <h3 className="subtitle">Tipos</h3>
                    { 
                        pokemon.types.map((type, index) => (
                            <p key={type.type.name + index} className="chip">{type.type.name}</p>
                        ))
                    }
                    <div className="table">
                        { 
                            pokemon.stats.map((stat, index) => (
                                <div className="stat-info">
                                    <p key={stat.stat.name + index} className="text">{stat.stat.name}</p>
                                    <span key={"0" + stat.stat.name + index} className="text">{stat.base_stat}</span>
                                </div>
                            ))
                        }
                    </div>
                    { 
                        pokemon.abilities.map((ability, index) => (
                            <div className="abilities">
                                <p key={ability.ability.name + index} className="chip">{ability.ability.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        </>
    );
}