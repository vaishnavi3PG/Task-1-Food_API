import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/errorPage";
import FinalRecipe from "./components/finalRecipe";
import Login from "./components/login";
import RandomRecipe from "./components/randomRecipe";
// import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<RandomRecipe />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<FinalRecipe />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;