import styled from "styled-components";
import {FaPlus, FaMinus} from "react-icons/fa";

export default function Counter({count, setCount, type, setTotalPrice, price}) {
  function increaseCount() {
    setCount(count + 1);
    setTotalPrice((count + 1) * price);
  }

  function decreaseCount() {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((count - 1) * price);
    }
  }

  return (
    <Wrapper type={type}>
      <Icon isActive={count > 1} type={type} onClick={decreaseCount}>
        <FaMinus className="icon" />
      </Icon>

      <p>{count}</p>

      <Icon isActive type={type}>
        <FaPlus className="icon" onClick={increaseCount} />
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;

    color: ${props => props.theme[props.type].dark};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${props =>
    props.isActive ? props.theme[props.type].dark : props.theme[props.type].light};
`;
