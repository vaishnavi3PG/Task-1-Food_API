import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { randomProducts } from '../redux/actions';
import FoodComponent from './foodComponent';

const RandomRecipe = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const url = "https://api.spoonacular.com/recipes/random?apiKey=7cd10c2a60a44d1d9b71bd1e55f2df06"
    //         const response = await fetch(url);
    //         const resJson = response.json();
    //         console.log(resJson);
    //         dispatch(randomProducts(response.data));
    //     }
    //     fetchApi();
    // }, [])

    const fetchProducts = async () => {
        const response = await axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=7cd10c2a60a44d1d9b71bd1e55f2df06")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(randomProducts(response.data));
    };
    useEffect(() => { fetchProducts(); });

    return (
        <div>
            <FoodComponent />
        </div>
    )
}

export default RandomRecipe;
