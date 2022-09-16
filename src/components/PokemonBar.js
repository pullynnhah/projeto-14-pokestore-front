import typeFinder from "../tools/typeFinder";
import {useState} from "react";
import {getPokemons} from "../tools/UseAxios";
import styled from "styled-components";

export default function PokemonBar({type, setType, authorized, unauthorized}) {
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

  function selectType(index) {
    const selectedBefore = typeSelections.find(typeSelection => typeSelection.selected === "solid");
    if (selectedBefore !== undefined) {
      selectedBefore.selected = "none";
    }
    const selections = [...typeSelections];
    selections[index].selected = "solid";
    setTypeSelections([...selections]);

    const selectedType = typeSelections[index].type;
    setType(typeFinder(selectedType));
    const promise = getPokemons({type: selectedType});
    promise.then(authorized);
    promise.catch(unauthorized);
  }

  return (
    <FilterBar type={type}>
      {typeSelections.map((typeSelection, index) => (
        <Button
          key={index}
          selected={typeSelection.selected}
          onClick={() => {
            selectType(index);
          }}
          type={typeFinder(typeSelection.type)}>
          {typeSelection.type}
        </Button>
      ))}
    </FilterBar>
  );
}

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
  min-width: 120px;
  width: 120px;
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
  text-transform: uppercase;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
`;
