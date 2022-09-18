import styled from "styled-components";

export default function Types({types}) {
  return <Wrapper>{types.map(type => (!type ? "" : <Type>{type}</Type>))}</Wrapper>;
}

const Wrapper = styled.div``;

const Type = styled.p``;
