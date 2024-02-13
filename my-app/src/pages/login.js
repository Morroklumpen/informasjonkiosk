import React from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import '../login.css';




  const Login = () => {
    const navigate = useNavigate()


    const firebaseConfig = {
        apiKey: "AIzaSyCg1xA2S0iIaLutzXkKNMS_j2wo7W0eXpg",
        authDomain: "infoskjerm-75b13.firebaseapp.com",
        projectId: "infoskjerm-75b13",
        storageBucket: "infoskjerm-75b13.appspot.com",
        messagingSenderId: "1002370475502",
        appId: "1:1002370475502:web:b2762217348a99ad301aff",
        measurementId: "G-CQ4GZHM869"
      };
      
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
  

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setUser(userCredential.user)
            })

    } 


    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setUser(userCredential.user)
            })

    } 

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // navigate("/admin")

        //const uid = user.uid;
    } else {

    }
    });
    
    const goToAdmin = () => {
        if (user) {
            navigate("admin")
        }
    }


  return (
    <>
      <head>
        <title>Login Page</title>
      </head>

      <div className="signup-container">
        <h1>signup</h1>
        <form id="signup-form" onSubmit={handleSignup}>
          <label htmlFor="email">email:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-container">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">email:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>

    <button onClick={goToAdmin}>
        Go to admin page
    </button>



    </>
  );
};

export default Login;