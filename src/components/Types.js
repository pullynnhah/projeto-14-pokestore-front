import styled from "styled-components";

export default function Types({types}) {
  return (
    <Wrapper>
      {types.map((type, index) =>
        !type.name ? (
          ""
        ) : (
          <Type type={type.color} key={index}>
            {type.name}
          </Type>
        )
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`;

const Type = styled.p`
  width: 35%;
  border: 2px solid ${props => props.theme[props.type].dark};
  background: ${props => props.theme[props.type].lighter};
  color: ${props => props.theme[props.type].dark};
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  padding: 8px 0;
  border-radius: 8px;
  text-align: center;
`;
