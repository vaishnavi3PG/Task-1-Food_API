import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import RecipeList from './recipeList';
import { selectedProducts } from '../redux/actions';

const SelectRecipe = () => {
    const dispatch = useDispatch();

    const query = localStorage.getItem('Query');
    const number = localStorage.getItem('Number');
    const intolerance = localStorage.getItem('Intolerance');


    const fetchRecipe = async () => {
        const response = await axios
            .get(`https://api.spoonacular.com/food/ingredients/search?query=${query}&number=${number}&intolerance=${intolerance}&apiKey=7cd10c2a60a44d1d9b71bd1e55f2df06`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response.data);
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => { fetchRecipe() });

    return (
        <>
            <RecipeList />
        </>
    )
}

export default SelectRecipe;
