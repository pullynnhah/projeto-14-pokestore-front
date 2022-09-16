import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import typeFinder from "../../tools/typeFinder";

export default function Page({children, type}) {
  type = typeFinder(type);
  return (
    <Wrapper type={type}>
      <Header type={type} />
      {children}
      <Footer type={type} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 140px);
  margin: 70px 0 60px;
  padding: 0 10%;
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
  overflow: auto;
`;
