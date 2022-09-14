import styled from "styled-components";
import {BsFillPersonFill, BsHouseFill, FaShoppingCart} from "react-icons/all";
import Icon from "../assets/styles/IconFooter.sc";

export default function Footer() {
  return (
    <Wrapper>
      <Icon>
        <BsHouseFill className="icon" />
      </Icon>

      {/*TODO: depends on the page that is active*/}
      <Icon isActive>
        <FaShoppingCart className="icon" />
      </Icon>
      <Icon>
        <BsFillPersonFill className="icon" />
      </Icon>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100vw;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;

  position: fixed;
  bottom: 0;
  left: 0;
`;
