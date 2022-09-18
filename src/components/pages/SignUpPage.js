import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {signUp} from "../../tools/UseAxios.js";
import logo from "../../assets/images/logo.png";
import LoadSpinners from "../../assets/styles/LoadSpinners.js";

function SignUpPage() {
  console.log();
  const navigate = useNavigate();
  const [isDisable, SetIsDisable] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    SetIsDisable(true);
    if (e.target[2].value === e.target[3].value) {
      const body = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      };
      signUp(body)
        .then(() => {
          return navigate("/");
        })
        .catch(error => {
          console.error(error);
          alert(`${error.response.data}`);
          SetIsDisable(false);
        });
    } else {
      SetIsDisable(false);
      alert("Por favor, verifique os dados inseridos");
    }
  }

  return (
    <Wrapper>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>

        <RegistrationForm onSubmit={handleForm}>
          <input type="text" name="name" placeholder="Name" disabled={isDisable} required />

          <input type="email" name="email" placeholder="E-mail" disabled={isDisable} required />

          <input
            type="password"
            name="password"
            placeholder="Password"
            disabled={isDisable}
            required
          />

          <input
            type="password"
            name="password confirmation"
            placeholder="Confirm password"
            disabled={isDisable}
            required
          />
          <Registbutton disabled={isDisable} bluur={isDisable}>
            {<LoadSpinners isDisable={isDisable}>Sign-up</LoadSpinners>}
          </Registbutton>
        </RegistrationForm>

        <Link to={`/`}>
          <New>Take me to login page!</New>
        </Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    ${props => props.theme.default.light},
    ${props => props.theme.default.lighter}
  );
`;
const Logo = styled.h1`
  width: 80vw;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;
const New = styled.p`
  font-size: 14;
  font-family: "Nunito", sans-serif;
  color: ${props => props.theme.default.medium};
  text-decoration-line: underline;
  a {
    text-decoration: none;
  }
`;
const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 303px;
    height: 45px;
    border: solid 1px #d5d5d5;
    background-color: ${props => props.theme.default.lighter};
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
    ::placeholder {
      font-weight: 400;
      color: ${props => props.theme.default.medium};
      font-style: italic;
    }
    font: 600 22px/26px "Nunito", sans-serif;
    color: ${props => props.theme.default.dark};
  }
`;
const Registbutton = styled.button`
  height: 45px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.default.dark};
  border: none;
  border-radius: 5px;
  font-size: 21px;
  font-family: "Nunito", sans-serif;
  color: #ffffff;
  margin-bottom: 25px;
  opacity: ${props => (props.bluur ? 0.7 : 1)};
`;

export default SignUpPage;
