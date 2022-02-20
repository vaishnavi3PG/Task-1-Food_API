import React from 'react'
import Headlines from './headlines';
import { useSelector } from 'react-redux';

const FoodComponent = () => {

    const foodRecipe = useSelector((state) => state.randomProductReducer.products);
    console.log(foodRecipe);

    const handleClick = () => {
        alert("Please Login!");
    }

    if (foodRecipe.recipes) {
        const image = foodRecipe.recipes[0].image;
        const title = foodRecipe.recipes[0].title;

        return (
            <>
                <Headlines />
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    For Complete Recipe <button onClick={handleClick}>Read More</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                Loading...
            </>
        )
    }
}

export default FoodComponent;
