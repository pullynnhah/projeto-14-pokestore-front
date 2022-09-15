import styled from "styled-components";

export default function Descriptor({weight, height, pokedexNumber, captureRate, type}) {
  return (
    <Wrapper type={type}>
      <h2>Description</h2>
      {!weight ? (
        ""
      ) : (
        <p>
          Weight: <strong>{weight.toFixed(1)}</strong> <small>kg</small>
        </p>
      )}
      {!height ? (
        ""
      ) : (
        <p>
          Height: <strong>{height.toFixed(1)}</strong> <small>m</small>
        </p>
      )}
      <p>
        Pokédex Number: <strong>{pokedexNumber}</strong>
      </p>
      <p>
        Capture Rate: <strong>{captureRate}</strong>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin: 30px 0 20px;
    color: ${props => props.theme[props.type].dark};
    border-bottom: 4px solid;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    padding: 15px 10px;
  }

  p:nth-child(odd) {
    color: ${props => props.theme[props.type].dark};
    background-color: ${props => props.theme[props.type].lighter};
  }

  p:nth-child(even) {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme[props.type].light};
  }

  strong {
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 22px;
  }

  small {
    font-weight: 300;
  }
`;
