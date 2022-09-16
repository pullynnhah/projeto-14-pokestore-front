import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import {SignUp} from "../../tools/UseAxios.js";
import LoadSpinners from "../../assets/styles/LoadSpinners.js";
import Header from "../commons/Header";
import Footer from "../commons/Footer";





function EditProfilePage() {
    const [isDisable, SetIsDisable] = useState(false);

    function handleForm(e) {
        e.preventDefault();
        SetIsDisable(true);
        // if (e.target[2].value === e.target[3].value) {
        //   const body = {
        //     name: e.target[0].value,
        //     email: e.target[1].value,
        //     password: e.target[2].value,
        //   };
        //   SignUp(body)
        //     .then(() => {
        //       return navigate("/");
        //     })
        //     .catch(error => {
        //       console.error(error);
        //       alert(`${error.response.data}`);
        //       SetIsDisable(false);
        //     });
        // } else {
        //   SetIsDisable(false);
        //   alert("Por favor, verifique os dados inseridos");
        // }
    }

    return (
        <Wrapper>
            <Header type={"default"} />
            <Container>
                <EditForm onSubmit={handleForm}>
                    <input type="text"
                        name="Name"
                        placeholder="Name"
                        disabled={isDisable}
                        required />

                    <input type="email"
                        name="email"
                        placeholder="E-mail"
                        disabled={true} />

                    <input type="text"
                        name="Zip-code"
                        placeholder="Zip-code"
                        disabled={isDisable}
                        required />

                    <input type="text"
                        name="Adress"
                        placeholder="Adress"
                        disabled={isDisable}
                        required />

                    <input type="text"
                        name="Nº"
                        placeholder="Nº"
                        disabled={isDisable}
                        required />

                    <input type="text"
                        name="Neighborhood"
                        placeholder="Neighborhood"
                        disabled={isDisable}
                        required />

                    <input type="text"
                        name="City"
                        placeholder="City"
                        disabled={isDisable}
                        required />

                    <input type="text"
                        name="Contact"
                        placeholder="Contact"
                        disabled={isDisable}
                        required />
                    <EditButton disabled={isDisable} bluur={isDisable}>
                        {<LoadSpinners isDisable={isDisable}>Save changes</LoadSpinners>}
                    </EditButton>
                </EditForm>
            </Container>
            <Footer type={"default"} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 10px 10px 10px;
    margin: 65px 0 90px 0;
    background: linear-gradient(
      ${props => props.theme.default.light},
      ${props => props.theme.default.lighter}
    );
    h1{
        margin-top: 50px;
        font: 600 26px/28px "Nunito", sans-serif;
        color: ${props => props.theme.pokemonBlue};
    }
`;
const EditForm = styled.form`
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
const EditButton = styled.button`
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

export default EditProfilePage;