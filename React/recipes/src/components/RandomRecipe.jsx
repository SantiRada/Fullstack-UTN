import { useState, useEffect } from 'react';
import { HiArrowsRightLeft } from "react-icons/hi2";

export function RandomRecipe (){
    const [recipe, setRecipe] = useState(null);
    const [description, setDescription] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(API_URL);
            const data = await response.json();

            setRecipe(data.meals[0]);
            setDescription(data.meals[0].strInstructions.substring(0, 100) + "...");
        }catch (error) {
            console.log("Error Message: " + error);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <>
            { recipe &&
                <article className="recipe-main">
                    <img src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                    <div className="content">
                        <h2>{ recipe.strMeal }</h2>
                        <p>{ description }</p>
                    </div>
                    <button className="button random-btn" onClick={ () => fetchData() }>
                        { isLoading && <div className="spin"></div> }
                        { !isLoading && <> <HiArrowsRightLeft size={18} /> Ver otra receta </> }
                    </button>
                </article>
            }
            { recipe == null &&
                <article className="recipe-main">
                    <div className="img-placeholder"><img src="" alt="" /></div>
                </article>
            }
        </>
    );
}