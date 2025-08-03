import React from "react";
import { pokemons } from "./PokeAPI/pokemons";

function App() {
  React.useEffect(() => {
    pokemons
      .getAll()
      .then((response) => {
        console.log(response.results);
      })
      .catch((error) => {
        console.error("Error fetching pokemons:", error);
      });
  }, []);
  return <p>Hola mundo</p>;
}

export default App;
