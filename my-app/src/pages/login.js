import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './login.css';
import Home from "./pages/Home";
// import Login from './pages/login';
// import AdminPanel from './pages/admin';
// import SignUp from './pages/signup';



return (

<>

<head>
    <title>Login Page</title>
</head>


    <div class="login-container">
        <h1>Login</h1>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <button type="submit">Login</button>
        </form>
    </div>
</>
);

 
export default login