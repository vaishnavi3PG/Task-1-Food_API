import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectRecipe from './selectRecipe';

const FinalRecipe = () => {
    let navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [number, setNumber] = useState(0);
    const [intolerance, setIntolerance] = useState("");

    const handleClickLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    const handleIntolerance = (e) => {
        let intoleranceArray = [...intolerance, e.target.value];
        setIntolerance(intoleranceArray);
    }

    const handleSeeDetails = () => {
        localStorage.setItem('Query', query);
        localStorage.setItem('Number', number);
        localStorage.setItem('Intolerance', intolerance);
    }

    return (
        <>
            <div>
                <button onClick={handleClickLogout}>Logout</button>
            </div>
            <div>
                <h1>Search Ingredient</h1>
                <h2>Search for simple foods</h2>
                <h4>(veggies, dairy, fruits, etc)</h4>
            </div>
            <form>
                <input
                    type='text'
                    placeholder='Enter the product'
                    required
                    onChange={(e) => { setQuery(e.target.value) }} />

                <input
                    type='number'
                    placeholder='Enter the number'
                    required
                    onChange={(e) => { setNumber(e.target.value) }} />

                <h4>Select Intolerance:</h4>
                <div className='list'>
                    <div><input type='checkbox' id="Egg" onChange={handleIntolerance} />Egg</div>
                    <div><input type='checkbox' id="Dairy" onChange={handleIntolerance} />Dairy</div>
                    <div><input type='checkbox' id="Gluten" onChange={handleIntolerance} />Gluten</div>
                    <div><input type='checkbox' id="Grain" onChange={handleIntolerance} />Grain</div>
                    <div><input type='checkbox' id="Peanut" onChange={handleIntolerance} />Peanut</div>
                    <div><input type='checkbox' id="Seafood" onChange={handleIntolerance} />Seafood</div>
                    <div><input type='checkbox' id="Soy" onChange={handleIntolerance} />Soy</div>
                    <div><input type='checkbox' id="Wheat" onChange={handleIntolerance} />Wheat</div>
                </div>
                <button onClick={handleSeeDetails}>See Details</button>
                {console.log("render")}
                {localStorage.getItem('Query') && localStorage.getItem('Number') && localStorage.getItem('Intolerance') ? <SelectRecipe /> : ""}
            </form>
        </>
    )
}

export default FinalRecipe;
