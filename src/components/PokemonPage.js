import styled from "styled-components";
import {useEffect, useState} from "react";
import {getPokemon} from "../tools/UseAxios";
import {useParams} from "react-router-dom";
import Page from "./Page";
import Loader from "./Loader";
import Descriptor from "./Descriptor";
import Type from "../tools/Type";
import CartButton from "./CartButton";
import Counter from "./Counter";

export default function PokemonPage() {
  const {pokedexNumber: pokedexNum} = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);

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
  const {classfication, name, type1, type2, isLegendary, price, image} = pokemon;
  const type = Type(type1);

  return (
    <Page type={type}>
      <Wrapper type={type}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p className="class">{classfication}</p>
        <Descriptor {...pokemon} type={type} />
        <p className="price">$ {totalPrice.toFixed(2)}</p>
        <Counter
          type={type}
          count={count}
          setCount={setCount}
          price={price}
          setTotalPrice={setTotalPrice}
        />
        <CartButton type={type} />
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
    font-size: 30px;
    line-height: 36px;
    margin: 20px 0;
    color: ${props => props.theme[props.type].dark};
  }
`;
