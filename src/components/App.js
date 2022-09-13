import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./styles/GlobalStyle.sc";
import GlobalContext from "../contexts/GlobalContext";

export default function App() {
  const [profile, setProfile] = useState(null);

  const theme = {
    water: {button: "blue"},
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext.Provider value={{profile, setProfile}}>
        <BrowserRouter>
          <Routes>{/*TODO: add route*/}</Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
