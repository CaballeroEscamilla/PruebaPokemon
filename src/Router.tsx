import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./Pages/Login";
import { PokedexPage } from "./Pages/pokedex";
import { PokemonInformationPage } from "./Pages/PokemonInformation";

export const AppRouter: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonInformationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
