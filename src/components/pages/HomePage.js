import Header from "../commons/Header";
import Footer from "../commons/Footer";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getPokemons} from "../../tools/UseAxios";
import Pokemon from "../Pokemon";
import Loader from "../commons/Loader";
import PokemonBar from "../PokemonBar";

export default function HomePage() {
  const [pokemons, setPokemons] = useState(null);
  const [type, setType] = useState("default");

  useEffect(() => {
    const promise = getPokemons({type: "all"});
    promise.then(authorized);
    promise.catch(unauthorized);
  }, []);

  function authorized(response) {
    setPokemons(response.data);
  }

  function unauthorized(error) {
    if (error.response.data === undefined) {
      alert("Error: unable to connect to server");
    } else {
      alert(error.response.data);
    }
  }

  if (!pokemons) {
    return <Loader />;
  }

  return (
    <Wrapper type={type}>
      <Header type={type} />
      <PokemonBar
        type={type}
        setType={setType}
        authorized={authorized}
        unauthorized={unauthorized}
      />
      <Pokemons>
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon._id} {...pokemon} />
        ))}
      </Pokemons>
      <Footer type={type} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(
      ${props => props.theme[props.type].light},
      ${props => props.theme[props.type].lighter}
    )
    fixed;

  .fidget-wrapper {
    position: fixed;
    top: calc(50vh - 35px);
    left: calc(50vw - 75px);
  }
`;

const Pokemons = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 30px;
  justify-content: center;
  justify-items: start;
  align-items: center;
  margin-bottom: 70px;
  padding: 30px 20px;
`;
