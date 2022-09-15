import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle.sc.js";
import GlobalContext from "./tools/GlobalContext";
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import {theme} from "./tools/Theme";
import PokemonPage from "./components/PokemonPage";
import Page from "./components/commons/Page";
import SignUpPage from "./components/SignUpPage";
import CartPage from "./components/CartPage";
import {IoSettings} from "react-icons/io5";

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
            <IoSettings />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
