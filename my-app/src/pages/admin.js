import React from "react"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../main.css';
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';







const Admin = () => {







    return(
        <>
        
        <header>
        <h1>Velkommen til adminsiden</h1>
      </header>

      <div id='logout'>
        <button>Logout</button>
      </div>

      <main>
        <section>

        </section>


        <section>

        </section>


        <section>

        </section>
      </main>

      <footer>
        <p>&copy; 2024 Informasjonskiosk. Alle rettigheter reservert.</p>
      </footer>

        
        
        
        </>
    )
}