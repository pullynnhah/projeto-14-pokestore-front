
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { CreateAccount } from "../tools/UseAxios.js";
import logo from "../assets/images/logo.png";


function SignUpPage() {
    console.log()
    const navigate = useNavigate();
    const [isDisable, SetIsDisable] = useState(false);
    const load = (isDisable ? <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />
        : "Sign-up");

    function handleForm(e) {
        e.preventDefault();
        SetIsDisable(true);
        // if (e.target[2].value === e.target[3].value) {
        //     const body = {
        //         name: e.target[0].value,
        //         email: e.target[1].value,
        //         password: e.target[2].value
        //     }
        //     CreateAccount(body).then(
        //         () => { return (navigate("/")) }
        //     ).catch((error) => {
        //         console.error(error)
        //         alert(`${error.response.data}`);
        //         SetIsDisable(false);
        //     });
        // } else {
        //     SetIsDisable(false);
        //     alert("Por favor, verifique os dados inseridos");
        // }

    }



    return (
        <Wrapper>
            <Container>
                <Logo><img src={logo} alt="logo"/></Logo>

                <RegistrationForm onSubmit={handleForm}>
                    <input type="text"
                        name="name"
                        placeholder="Name"
                        disabled={isDisable}
                        required />

                    <input type="email"
                        name="email"
                        placeholder="E-mail"
                        disabled={isDisable}
                        required />

                    <input type="password"
                        name="password"
                        placeholder="Password"
                        disabled={isDisable}
                        required />

                    <input type="password"
                        name="password confirmation"
                        placeholder="Confirm password"
                        disabled={isDisable}
                        required />
                    <Registbutton disabled={isDisable} bluur={isDisable}>{load}</Registbutton>
                </RegistrationForm>

                <Link to={`/`} >
                    <New>Já tem uma conta? Faça login!</New>
                </Link>
            </Container>

        </Wrapper>
    );
}



const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    height: 100vh;
`
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
`
const Logo = styled.h1`
    width: 80vw;
    margin-bottom: 50px;
`
const New = styled.p`
    font-size: 14;
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.default.medium};
    text-decoration-line: underline;
    a{
        text-decoration: none;
    }
`
const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 303px;
        height: 45px;
        border: solid 1px #D5D5D5;
        background-color: ${props => props.theme.default.lighter};
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 15px;
        ::placeholder {
            font-weight: 400;
            color: ${props => props.theme.default.medium};
            font-style: italic;
        }
        font: 600 22px/26px 'Nunito', sans-serif;
        color: ${props => props.theme.default.dark};
        }
`
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
    font-family: 'Nunito', sans-serif;
    color: #FFFFFF;
    margin-bottom: 25px;
    opacity: ${props => props.bluur ? 0.7 : 1};
    /* text-transform: uppercase */
`

export default SignUpPage;