import styled from "styled-components";
import {FaRegTrashAlt} from "react-icons/fa";

export default function Product({name, type1, isLegendary, image, price, quantity}) {
  const total = price * quantity;
  return (
    <Wrapper type={type1}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="amount">× {quantity}</p>
      <strong>$ {total.toFixed(2)}</strong>
      <FaRegTrashAlt className="icon" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 135px;
  padding: 0 15px;
  background: ${props => props.theme[props.type].lighter};
  box-shadow: 5px 5px 5px ${props => props.theme[props.type].light};
  border-radius: 10px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 90px calc(100% - 160px) 40px;
  grid-template-areas:
    "img . ."
    "img . .";

  align-items: end;
  justify-items: start;
  gap: 10px 15px;

  img {
    border: 2px solid ${props => props.theme[props.type].dark};
    grid-area: img;
    align-self: center;
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }

  h2 {
    width: 200px;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    color: ${props => props.theme[props.type].dark};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  strong {
    width: fit-content;
    align-self: start;
    height: 50px;
    padding: 0 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 3px 3px 3px rgb(0, 0, 0, 0.2);

    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    background: ${props => props.theme[props.type].medium};
    color: ${props => props.theme.black};
  }

  .amount {
    height: fit-content;
    justify-self: end;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: ${props => props.theme.gray};
  }

  .icon {
    align-self: start;
    justify-self: end;
    margin-top: 12px;
    font-size: 18px;
    color: ${props => props.theme[props.type].medium};
  }
`;
