import React from 'react';
import { useSelector } from 'react-redux';

const RecipeList = () => {

    const recipe = useSelector((state) => state.selectedProductReducer.products);
    console.log(recipe);

    if (recipe) {
        const listOfRecipes = recipe.results.map((recipes) => {
            const id = recipes.id;
            const name = recipes.name;
            return (
                <div key={id}>
                    {name}
                </div>
            );
        }
        );

        return (
            <>
                <h3>{listOfRecipes}</h3>
            </>
        )
    }
    else {
        return <div></div>
    }

}

export default RecipeList;
