import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/styles/GlobalStyle.sc";
import GlobalContext from "./tools/GlobalContext";

import LoginPage from "./components/LoginPage.js";

export default function App() {
  const [profile, setProfile] = useState(null);

  const theme = {
    water: { button: "blue" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext.Provider value={{ profile, setProfile }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />;
            {/* <Route path="/signup" element={<SignUpPage />} />; */}
          </Routes>

        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
