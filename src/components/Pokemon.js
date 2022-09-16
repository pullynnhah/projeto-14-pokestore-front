import styled from "styled-components";
import typeFinder from "../tools/typeFinder";
import {useNavigate} from "react-router-dom";

export default function Pokemon({pokedexNumber, type1, image, name, price}) {
  const navigate = useNavigate();
  function pokemonNavigate(pokedexNumber) {
    navigate(`/pokemon/${pokedexNumber}`);
  }

  return (
    <PokemonCard
      onClick={() => {
        pokemonNavigate(pokedexNumber);
      }}
      cardColor={typeFinder(type1)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>$ {price.toFixed(2)}</p>
    </PokemonCard>
  );
}

const PokemonCard = styled.div`
  width: 150px;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    ${props => props.theme[props.cardColor].dark},
    ${props => props.theme[props.cardColor].medium}
  );
  border-radius: 10px;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h2,
  p {
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
  }

  h2 {
    color: ${props => props.theme.white};
  }

  p {
    width: fit-content;
    padding: 5px 10px;
    background: ${props => props.theme[props.cardColor].lighter};
    color: ${props => props.theme[props.cardColor].dark};
    border-radius: 5px;
  }
`;
