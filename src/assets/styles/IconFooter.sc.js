import styled from "styled-components";

const Icon = styled.div`
  color: ${props => (props.isActive ? props.theme.pokemonLightBlue : props.theme.pokemonBlue)};
  font-size: ${props => (props.isActive ? "56px" : "44px")};

  .icon:hover {
    color: ${props => props.theme.pokemonRed};
    transform: scale(1.1);
  }
`;

export default Icon;
