import {FaShoppingCart} from "react-icons/fa";
import styled from "styled-components";

export default function AddCartButton({type}) {
  return (
    <Button type={type}>
      <FaShoppingCart className="icon" />
      Add to cart
    </Button>
  );
}

// TODO: add loader ---> waiting for pull request for loader
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
