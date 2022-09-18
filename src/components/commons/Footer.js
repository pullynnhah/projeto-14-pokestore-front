import styled from "styled-components";
import {BsFillPersonFill, BsHouseFill, FaShoppingCart} from "react-icons/all";
import {useLocation, useNavigate} from "react-router-dom";

export default function Footer({type}) {
  const loc = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper type={type}>
      <Icon isActive={loc.pathname === "/"} onClick={() => navigate("/")}>
        <BsHouseFill className="icon" />
      </Icon>

      <Icon isActive={loc.pathname === "/cart"} onClick={() => navigate("/cart")}>
        <FaShoppingCart className="icon" />
      </Icon>
      <Icon isActive={loc.pathname === "/profile"} onClick={() => navigate("/profile")}>
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
  z-index: 1;
`;
