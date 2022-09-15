import Page from "./Page";
import {useState} from "react";
import Product from "./Product";
import styled from "styled-components";

export default function CartPage() {
  const [products, setProducts] = useState([
    {
      name: "Ivysaur",
      type1: "grass",
      isLegendary: false,
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
      price: 562.57,
      quantity: 1,
    },
    {
      name: "Venusaur",
      type1: "electric",
      isLegendary: false,
      image: "https://img.pokemondb.net/artwork/venusaur.jpg",
      price: 778.99,
      quantity: 2,
    },
    {
      name: "Charmander",
      type1: "fire",
      isLegendary: false,
      image: "https://img.pokemondb.net/artwork/charmander.jpg",
      price: 1231231231.0,
      quantity: 3,
    },
  ]);
  return (
    <Page>
      <Wrapper>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div``;
