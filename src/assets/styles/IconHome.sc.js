import styled from "styled-components";

const Icon = styled.div`
  color: ${props => (props.isActive ? props.theme.pokemonLightBlue : props.theme.pokemonBlue)};
  font-size: ${props => (props.isActive ? "46px" : "34px")};
  display:flex;
  align-items: center;
  margin-left: 10px;

  .icon:hover {
    color: ${props => props.theme.pokemonRed};
    transform: scale(1.1);
  }
`;

export default Icon;
