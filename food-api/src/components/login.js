import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        if (submit) {
            localStorage.setItem("loggedInUser", JSON.stringify({ UserName: username, UserEmail: email, UserPassword: password }));
            console.log(username, email, password);
            navigate("/dashboard");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name='username'
                    id='name'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter email id"
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;
