import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle.sc.js";
import GlobalContext from "./tools/GlobalContext";
import {theme} from "./tools/Theme";
import PokemonPage from "./components/PokemonPage";
import Page from "./components/Page";
import SignUpPage from "./components/SignUpPage"
import LoginPage from "./components/LoginPage.js";
import Loader from "./components/Loader";

export default function App() {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext.Provider value={{profile, setProfile}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />;
            <Route path="/signup" element={<SignUpPage />} />;
            <Route path="/page" element={<Page type={"psychic"}></Page>} />;
            <Route path="/pokemon/:pokedexNumber" element={<PokemonPage />} />;
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
