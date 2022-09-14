import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Page({children, type}) {
  const types = [
    "grass",
    "fire",
    "water",
    "normal",
    "poison",
    "eletric",
    "ground",
    "psychic",
    "bug",
  ];
  if (!types.includes(type)) {
    type = "default";
  }
  return (
    <Wrapper type={type}>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 70px 10% 60px;
  background: linear-gradient(
      ${props => props.theme[props.type].light},
      ${props => props.theme[props.type].lighter}
    )
    fixed;

  .fidget-wrapper {
    position: fixed;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);
  }
`;
