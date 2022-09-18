import {FaShoppingCart} from "react-icons/fa";
import styled from "styled-components";
import {useContext, useState} from "react";
import GlobalContext from "../tools/GlobalContext";
import {addCartItem} from "../tools/UseAxios";
import {useNavigate} from "react-router-dom";
import LoadSpinners from "../assets/styles/LoadSpinners";

export default function AddCartButton({type, quantity, pokedexNumber}) {
  const [isLoading, setIsLoading] = useState(false);
  const {profile} = useContext(GlobalContext);
  const storage = JSON.parse(localStorage.getItem("profile"))
  const navigate = useNavigate();
  
  async function addToCart() {
    try {
      if(storage === null) {
        alert("To add items to your cart, please, Log-in.")
        return navigate("/login");
      }
      setIsLoading(true);
      await addCartItem(quantity, pokedexNumber, profile);
      setIsLoading(false);
      alert("Adicionado no carrinho com sucesso!");
      navigate(-1);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <Button type={type} onClick={addToCart}>
      <LoadSpinners isDisable={isLoading}>
        <FaShoppingCart className="icon" />
        Add to cart
      </LoadSpinners>
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 70px;
  font-weight: 700;
  font-size: 26px;

  background: linear-gradient(
    ${props => props.theme[props.type].lighter},
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].medium},
    ${props => props.theme[props.type].dark}
  );
  color: ${props => props.theme.white};
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  border-radius: 10px;
`;
