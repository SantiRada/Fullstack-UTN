import { Categories } from './Categories';
import { RandomRecipe } from './RandomRecipe';
import { ListRecipes } from './ListRecipes';

export function Main ({listRecipes}){
    return(
        <>
            <Categories />
            { listRecipes && listRecipes.length > 0 &&
                <ListRecipes listRecipes={listRecipes} />
            }
            { listRecipes && listRecipes.length == 0 &&
                <>
                    <RandomRecipe />
                    <ListRecipes listRecipes={listRecipes} />
                </>
            }

        </>
    );
}