import styled from "styled-components";
import {FaRegTrashAlt} from "react-icons/fa";

export default function Product({name, type1, isLegendary, image, price, quantity}) {
  const total = price * quantity;
  return (
    <Wrapper type={type1}>
      <div className="container">
        <img src={image} alt={name} />
        <div className="circle">{quantity}</div>
      </div>
      <h2>{name}</h2>
      <strong>$ {total.toFixed(2)}</strong>
      <FaRegTrashAlt className="icon" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 3px solid ${props => props.theme[props.type].dark};
  border-radius: 10px;
  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].lighter}
  );

  display: grid;
  grid-template-columns: 35% calc(65% - 60px) 20px;
  grid-template-areas:
    "img title trash"
    "img price price";

  align-items: center;
  justify-items: start;
  gap: 20px;
  padding: 20px 10px;
  margin: 30px 0;

  .container {
    grid-area: img;
    position: relative;
    z-index: 0;
  }

  .circle {
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    padding: 10px 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: ${props => props.theme.white};
    background: ${props => props.theme[props.type].dark};
  }
  img {
    width: 200px;
    border-radius: 10px;
  }

  h2 {
    grid-area: title;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: ${props => props.theme[props.type].dark};
    text-decoration: underline;
  }

  p {
    font-size: 20px;
    line-height: 20px;
    color: ${props => props.theme.gray};
  }

  strong {
    grid-area: price;
    align-self: start;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: ${props => props.theme[props.type].dark};
    border: 2px solid;
    background: ${props => props.theme.white};
    padding: 10px;
    border-radius: 5px;
  }

  .icon {
    grid-area: trash;
    justify-self: end;
    font-size: 18px;
    color: ${props => props.theme[props.type].medium};
  }
`;
