import Page from "../commons/Page";
import {useState} from "react";
import Product from "../Product";
import styled from "styled-components";
import Header from "../commons/Header";
import Footer from "../commons/Footer";

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
      quantity: 20,
    },
    {
      name: "Charmander",
      type1: "fire",
      isLegendary: false,
      image: "https://img.pokemondb.net/artwork/charmander.jpg",
      price: 31231.0,
      quantity: 3,
    },
  ]);

  const type = "default";
  return (
    <>
      <Header type={type} />
      <Wrapper type={type}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </Wrapper>
      <Footer type={type} />
    </>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 140px);
  margin: 70px 0 60px;
  padding: 20px;
  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].lighter}
  );
`;
