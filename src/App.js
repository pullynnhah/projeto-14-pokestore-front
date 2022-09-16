import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle.sc.js";
import GlobalContext from "./tools/GlobalContext";
import LoginPage from "./components/pages/LoginPage.js";
import HomePage from "./components/pages/HomePage.js";
import {theme} from "./tools/Theme";
import PokemonPage from "./components/pages/PokemonPage";
import SignUpPage from "./components/pages/SignUpPage";
import CartPage from "./components/pages/CartPage";

export default function App() {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext.Provider value={{profile, setProfile}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage type={"default"} />} />
            <Route path="/pokemon/:pokedexNumber" element={<PokemonPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
