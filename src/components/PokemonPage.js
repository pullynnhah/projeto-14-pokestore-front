import styled from "styled-components";
import {useEffect, useState} from "react";
import {getPokemon} from "../tools/UseAxios";
import {useParams} from "react-router-dom";
import Page from "./Page";
import Loader from "./Loader";
import Descriptor from "./Descriptor";
import Type from "../tools/Type";
import {FaShoppingCart} from "react-icons/fa";

export default function PokemonPage() {
  const {pokedexNumber: pokedexNum} = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const promise = getPokemon(pokedexNum);
    promise.then(res => {
      setPokemon(res.data);
      setTotalPrice(res.data.price);
    });
  }, [pokedexNum]);

  if (!pokemon) {
    return (
      <Page>
        <Loader />
      </Page>
    );
  }

  // TODO: add display for types and legendary pokémon
  const {classfication, name, type1, type2, isLegendary, image} = pokemon;
  const type = Type(type1);

  return (
    <Page type={type}>
      <Wrapper type={type}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p className="class">{classfication}</p>
        <Descriptor {...pokemon} type={type} />
        <p className="price">$ {totalPrice.toFixed(2)}</p>
        <button>
          <FaShoppingCart className="icon" />
          Add to cart
        </button>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.section`
  img {
    width: 100%;
    border-radius: 15px;
    margin-top: 30px;
  }

  h1 {
    font-weight: 900;
    font-size: 36px;
    line-height: 36px;
    color: ${props => props.theme[props.type].dark};
    margin: 20px 0 5px;
  }

  .class {
    font-weight: 500;
    font-size: 21px;
    line-height: 28px;
    font-style: italic;
    color: ${props => props.theme[props.type].medium};
  }

  .price {
    font-weight: 800;
    font-size: 42px;
    line-height: 42px;
    margin: 50px 0;
    color: ${props => props.theme[props.type].dark};
  }

  // TODO: create a button component
  button {
    width: 100%;
    height: 70px;
    font-weight: 700;
    font-size: 26px;

    background-color: ${props => props.theme[props.type].light};
    color: ${props => props.theme.white};
    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;

    border-radius: 10px;
  }
`;
