import styled from "styled-components";
import logo from "../assets/images/logo.png";

// TODO: remove this import
import squirtle from "../assets/images/squirtleProfile.png";
import {FaShoppingCart} from "react-icons/fa";

export default function Header({type}) {
  return (
    <Wrapper type={type}>
      <img src={logo} alt="Pokéstore logo" className="logo" />
      <FaShoppingCart className="icon" />
      <img src={squirtle} alt="Profile" className="profile" />
    </Wrapper>
  );
}
const Wrapper = styled.header`
  width: 100vw;
  height: 70px;
  padding: 0 10%;
  background-color: ${props => props.theme[props.type].light};
  display: grid;
  grid-template-columns: 200px calc(100% - 240px) 40px;
  align-items: center;
  justify-content: center;
  gap: 6%;
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;

  .logo {
    width: 200px;
  }

  .icon {
    justify-self: end;
    font-size: 36px;
    color: ${props => props.theme.pokemonBlue};
    transition: all 500ms;
  }

  .profile {
    width: 40px;
    border-radius: 50%;
  }
`;
