import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Page({children}) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 70px 10% 60px;
  background: linear-gradient(${props => props.theme.pokemonRed} 1%, ${props => props.theme.white})
    fixed;
`;
