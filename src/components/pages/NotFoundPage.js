import pokeball from "../../assets/images/pokeball.png";
import styled from "styled-components";
import Page from "../commons/Page";
import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Page type="default">
      <Wrapper>
        <div>
          <p>4</p>
          <img src={pokeball} alt="pokeball" />
          <p>4</p>
        </div>
        <h2>Uh-oh!</h2>
        <p className="error">You look lost on your journey!</p>
        <button onClick={() => navigate("/")}>Home</button>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  margin: 50px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    p {
      font-size: 180px;
      line-height: 180px;
      font-weight: 900;
      color: ${props => props.theme.gray};
    }

    img {
      width: 150px;
    }
  }

  h2 {
    font-size: 36px;
    line-height: 36px;
    font-weight: 800;
    color: ${props => props.theme.gray};
    text-align: center;
  }

  .error {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    color: ${props => props.theme.gray};
    text-align: center;
    margin: 15px 0 35px;
  }
  button {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 50px;
    background: ${props => props.theme["default"].medium};
    color: ${props => props.theme.white};
    font-size: 20px;
    line-height: 20px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    border-radius: 10px;
  }
`;
