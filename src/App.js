import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle.sc.js";
import GlobalContext from "./tools/GlobalContext";
import LoginPage from "./components/LoginPage.js";
import {theme} from "./tools/Theme";
import PokemonPage from "./components/PokemonPage";
import Page from "./components/Page";
import Loader from "./components/Loader";

export default function App() {
  const [profile, setProfile] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext.Provider value={{profile, setProfile}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />;
            {/* <Route path="/signup" element={<SignUpPage />} />; */}
            <Route path="/pokemon/:pokedexNumber" element={<PokemonPage />} />;
            <Route
              path="/loader"
              element={
                <Page>
                  <Loader />
                </Page>
              }
            />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
