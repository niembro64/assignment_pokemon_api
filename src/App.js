import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// fetch all 807 pokemon with a button from https://pokeapi.co

function App() {
  const [pokemon, setPokemon] = useState([
    { name: "poke1", url: "url1" },
    { name: "poke2", url: "url2" },
    { name: "poke3", url: "url3" },
  ]);

  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling API");
    // fetch("https://pokeapi.co/api/v2/pokemon/")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res.results);
        // console.log(res.results[0].name);
        setPokemon(res.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>Axios Pokemon API</h1>
      <button className="btn btn-primary mx-4" onClick={fetchInfo}>
        Fetch Pokemon
      </button>
      {pokemon.map((item, i) => {
        // return <p key={i}>{item.name}{item.url}</p>;
        return <p key={i}>{item.name}</p>;
      })}
    </div>
  );
}

export default App;
