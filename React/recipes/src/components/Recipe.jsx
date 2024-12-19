import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Categories } from './Categories';

export function Recipe(){
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
    
                setRecipe(data.meals[0]);
            } catch (error) { console.log(error); }
        }

        fetchData();
    }, []);

    return(
        <>
            <Categories />
            <div className="recipe-screen">
                { recipe && (
                    <div className="recipe-container">
                        <div className="recipe-img">
                            <img src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                        </div>
                        <div className="recipe-content">
                            <h1>{ recipe.strMeal }</h1>
                            <p>{ recipe.strInstructions }</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}