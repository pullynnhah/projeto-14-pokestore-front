import styled from "styled-components";
import {BsFillPersonFill, BsHouseFill, FaShoppingCart} from "react-icons/all";

export default function Footer({type}) {
  // TODO: based on the route decide which Icon will be active
  return (
    <Wrapper type={type}>
      <Icon>
        <BsHouseFill className="icon" />
      </Icon>

      {/*TODO: depends on the page that is active*/}
      <Icon isActive>
        <FaShoppingCart className="icon" />
      </Icon>
      <Icon>
        <BsFillPersonFill className="icon" />
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100vw;
  height: 70px;

  background-color: ${props => props.theme[props.type].lighter};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;

  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 20px;
`;

const Icon = styled.div`
  color: ${props => (props.isActive ? props.theme.pokemonLightBlue : props.theme.pokemonBlue)};
  font-size: ${props => (props.isActive ? "50px" : "40px")};

  .icon:hover {
    color: ${props => props.theme.pokemonRed};
    transform: scale(1.1);
  }
`;
