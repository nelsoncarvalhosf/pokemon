import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from './img/logo.png';
import { ApplicationRoutes } from "./ApplicationRoutes";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1> 
        <img src={logo} className="App-logo" alt="logo" width="200px" />
      </h1>
      <ul className="menuPrincipal">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/pokemons">POKEMONS</Link>
        </li>
      </ul>
      <ApplicationRoutes />
      <Footer />
    </div>
  );
}
