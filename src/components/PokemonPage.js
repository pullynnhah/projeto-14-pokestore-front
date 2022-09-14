import styled from "styled-components";
import {useEffect, useState} from "react";
import {getPokemon} from "../tools/UseAxios";
import {useParams} from "react-router-dom";
import Page from "./Page";
import Loader from "./Loader";

const data = {
  _id: "6322238877b9fa8f1d1ed3de",
  captureRate: 45,
  classfication: "Seed Pokémon",
  height: 0.7,
  name: "Bulbasaur",
  pokedexNumber: 1,
  type1: "grass",
  type2: "poison",
  weight: 6.9,
  isLegendary: false,
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  price: 199.99,
};

export default function PokemonPage() {
  const {pokedexNumber} = useParams();

  console.log(pokedexNumber);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const promise = getPokemon(pokedexNumber);
    promise.then(res => setPokemon(res.data));
    promise.catch(err => console.log(err.response));
  }, [pokedexNumber]);

  if (!pokemon) {
    return (
      <Page>
        <Loader />
      </Page>
    );
  }
  return (
    <Page>
      <Wrapper></Wrapper>
    </Page>
  );
}

const Wrapper = styled.section``;
