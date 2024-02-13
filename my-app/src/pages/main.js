import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../main.css';
// import Home from "./pages/Home";
// import Login from './pages/Login';
// import AdminPanel from './pages/Admin';
// import SignUp from './pages/SignUp';

const Main = () => {
  return (
    <>
      <header>
        <h1>Velkommen til Informasjonskiosken</h1>
      </header>

      <div id='logout'>
        xxxxxxxxxxx
      </div>

      <main>
        <section>
          <img src="./menu.jpeg" alt="Dagens Meny" />
          <h2>Dagens Meny</h2>
          <p>Utforsk vårt varierte utvalg av deilige retter.</p>
        </section>

        <section>
          <img src="./specials.jpeg" alt="Spesialtilbud" />
          <h2>Spesialtilbud</h2>
          <p>Sjekk ut våre eksklusive tilbud for dagen.</p>
        </section>

        <section>
          <img src="./events.png" alt="Lokale Arrangementer" />
          <h2>Lokale Arrangementer</h2>
          <p>Få informasjon om spennende hendelser i nærområdet.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Informasjonskiosk. Alle rettigheter reservert.</p>
      </footer>
    </>
  );
};

export default Main;
