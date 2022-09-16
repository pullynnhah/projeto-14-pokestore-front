import Header from "../commons/Header";
import Footer from "../commons/Footer";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getPokemons} from "../../tools/UseAxios";
import {useNavigate} from "react-router-dom";
import Pokemon from "../Pokemon";
import typeFinder from "../../tools/typeFinder";
import Loader from "../commons/Loader";

export default function HomePage({children, type}) {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState(null);
  const [homeType, setHomeType] = useState(type);
  const [typeSelections, setTypeSelections] = useState([
    {type: "all", selected: "none"},
    {type: "grass", selected: "none"},
    {type: "electric", selected: "none"},
    {type: "fire", selected: "none"},
    {type: "water", selected: "none"},
    {type: "normal", selected: "none"},
    {type: "poison", selected: "none"},
    {type: "ground", selected: "none"},
    {type: "psychic", selected: "none"},
    {type: "bug", selected: "none"},
    {type: "legendary", selected: "none"},
    {type: "others", selected: "none"},
  ]);

  useEffect(() => {
    const pokeType = {type: "all"};
    const promise = getPokemons(pokeType);
    promise.then(autorized);
    promise.catch(unautorized);
  }, []);

  function selectType(index) {
    const selectedBefore = typeSelections.find(typeSelection => typeSelection.selected === "solid");
    if (selectedBefore !== undefined) {
      selectedBefore.selected = "none";
    }
    typeSelections[index].selected = "solid";
    setTypeSelections([...typeSelections]);
    setHomeType(typeFinder(typeSelections[index].type));
    const pokeType = {type: typeSelections[index].type};
    const promisse = getPokemons(pokeType);
    promisse.then(autorized);
    promisse.catch(unautorized);
  }

  function autorized(response) {
    setPokemons(response.data);
  }

  function unautorized(error) {
    if (error.response.data === undefined) {
      alert("Error: unable to connect to server");
    } else {
      alert(error.response.data);
    }
  }

  return (
    <Wrapper type={homeType}>
      <Header type={homeType} />
      <FilterBar type={homeType}>
        {typeSelections.length === 0
          ? ""
          : typeSelections.map((typeSelection, index) => (
              <Button
                selected={typeSelection.selected}
                onClick={() => {
                  selectType(index);
                }}
                type={typeFinder(typeSelection.type)}>
                {typeSelection.type}
              </Button>
            ))}
      </FilterBar>
      <Pokemons>
        {!pokemons ? (
          <Loader />
        ) : (
          pokemons.map(pokemon => <Pokemon key={pokemon._id} {...pokemon} />)
        )}
      </Pokemons>
      <Footer type={homeType} />
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
`;
const FilterBar = styled.div`
  height: auto;
  background: linear-gradient(
    ${props => props.theme[props.type].dark},
    ${props => props.theme[props.type].medium},
    ${props => props.theme[props.type].dark}
  );
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  padding: 20px 10px 10px 10px;
`;
const Button = styled.div`
  min-width: 100px;
  width: 100px;
  height: 45px;
  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].dark},
    ${props => props.theme[props.type].light}
  );
  border: 3px ${props => props.selected} ${props => props.theme[props.type].dark};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${props => props.theme.white};
  font-weight: 800;
  text-transform: upper;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
`;
const Pokemons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 70px;
  padding-bottom: 20px;
`;
