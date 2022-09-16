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
      <div>{name}</div>
      <div>${price.toFixed(2)}</div>
    </PokemonCard>
  );
}

const PokemonCard = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  background: linear-gradient(
    ${props => props.theme[props.cardColor].dark},
    ${props => props.theme[props.cardColor].medium}
  );
  border-radius: 10px;
  margin: 20px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  img {
    width: 120px;
    height: 120px;
    margin-top: 15px;
    border-radius: 10px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${props => props.theme[props.cardColor].lighter};
  }
`;
