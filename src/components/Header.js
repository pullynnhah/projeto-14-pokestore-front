import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadSpinners from "../assets/styles/LoadSpinners.js";
import { Logout } from "../tools/UseAxios.js";
import { useContext } from "react";
import GlobalContext from "../tools/GlobalContext.js";

// TODO: remove this import
import squirtle from "../assets/images/squirtleProfile.png";


export default function Header({ type }) {
  const [clicked, setClicked] = useState(false);
  const [outClick, setOutClick] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  // eslint-disable-next-line
  const { profile, setProfile } = useContext(GlobalContext);
  const navigate = useNavigate();

  function openClick() {
    setClicked(!clicked);
  }

  function logoutConfirm(props) {
    setClicked(false);
    if (props) {
      Logout(profile).then(async (res) => {
        await localStorage.clear();
        setIsDisable(!isDisable)
        setOutClick(!outClick);
        return (navigate("/"));
      }).catch((error) => {
        console.error(error);
        alert(`${error.response.data}`);
        setOutClick(!outClick);
        setIsDisable(false);
        return (navigate("/"));
      });
    } else {
      setOutClick(!outClick);
    }
  }
  return (
    <Wrapper type={type}>
      <img src={logo} alt="Pokéstore logo" className="logo" />
      <FaShoppingCart className="icon" />
      <Menu clicked={clicked} type={type} >
        <div>
          <IoSettings className="icon" />
        </div>

        <div onClick={() => logoutConfirm()}>
          <IoLogOut className="icon" />
          <Confirmation type={type} clicked={outClick}>
            <h1>are you sure you want to logout?</h1>
            <ButtomBox>
              <LogoutButton type={type} onClick={() => logoutConfirm(outClick)}>{<LoadSpinners isDisable={isDisable}>Yes, logout!</LoadSpinners>}</LogoutButton>
              <LogoutButton type={type} onClick={() => logoutConfirm()}>Cancel</LogoutButton>
            </ButtomBox>
          </Confirmation>
        </div>

        <div onClick={() => openClick()}>
          <img src={squirtle} alt="Profile" className="profile" />
        </div>
      </Menu>
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

  .icon:hover {
    color: ${props => props.theme.pokemonYellow};
    transform: scale(1.1);
  }

  .profile {
    width: 40px;
    border-radius: 50%;
  }
`;

const Menu = styled.div`
  height:  ${props => props.clicked ? "370%" : "70%"};
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  transition: height 0.5s;
  border-radius: 5px;
  border: ${props => props.clicked ? "370%" : "70%"};
  background-color: ${props => props.clicked ? props.theme[props.type].medium : props.theme[props.type].light};
  div{
    margin-top: 4px;
  }
`;
const Confirmation = styled.div`
  width: 70vw;
  height: 20vh;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 50%;
  transform: bottom(-50%, 0);
  display: ${props => props.clicked ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme[props.type].light};
  border: solid 1px ${props => props.theme[props.type].medium};
  border-radius: 5px;
  padding: 24px;
  h1{
    font: 600 24px/28px 'Nunito', sans-serif;
    color: ${props => props.theme[props.type].dark};
    text-align: center;
  }
`;
const LogoutButton = styled.div`
  background-color: ${props => props.theme[props.type].medium};
  height: 5vh;
  width: 25vw;
  border-radius: 5px;
  text-align: center;
  font: 400 16px/25px 'Nunito', sans-serif;
  color: ${props => props.theme.white};
  padding: 5px;
  display: flex;
  align-items: center;
`;
const ButtomBox = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`;