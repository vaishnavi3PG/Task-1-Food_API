import React from 'react'
import { Link } from 'react-router-dom'

const Headlines = () => {
    return (
        <>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            <div>
                <h1>Welcome to Spoonacular</h1>
                <h3>Explore all your nutritional requirements here</h3>
                <h2>Recipe of the day</h2>
            </div>
        </>
    )
}

export default Headlines;
