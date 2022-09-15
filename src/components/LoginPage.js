import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "../tools/GlobalContext.js";
import { Login } from "../tools/UseAxios.js";
import logo from "../assets/images/logo.png";
import LoadSpinners from "../assets/styles/LoadSpinners.js";

function LoginPage() {
    // eslint-disable-next-line no-unused-vars
    const { profile, setProfile } = useContext(GlobalContext);
    const [isDisable, setIsDisable] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();
        setIsDisable(true);
        const body = {
            email: e.target[0].value,
            password: e.target[1].value
        };
        Login(body).then(async (res) => {
            await localStorage.setItem("profile",
                JSON.stringify({
                    token: res.data.token,
                    userId: res.data._id,
                    userPicture: res.data.picture
                })
            );
            setProfile(JSON.parse(localStorage.getItem("profile")));
            return (navigate("/home"));
        }).catch((error) => {
            console.error(error);
            alert(`${error.response.data}`);
            setIsDisable(false);
        });
    }

    return (
        <Wrapper>
            <Container>
                <Logo><img src={logo} alt="logo" /></Logo>
                <Loginform onSubmit={handleForm}>
                    <input type="email"
                        name="email"
                        placeholder="email"
                        disabled={isDisable}
                        required />
                    <input type="password"
                        name="password"
                        placeholder="password"
                        disabled={isDisable}
                        required />
                    <Loginbutton disabled={isDisable} bluur={isDisable}>{<LoadSpinners isDisable={isDisable}>Log-in</LoadSpinners>}</Loginbutton>
                </Loginform>
                <Link to={`/signup`} >
                    <New>First time here? Sign-Up!</New>
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
    font-family: 'Nunito', sans-serif;
    color: ${props => props.theme.default.medium};
    text-decoration-line: underline;
    a{
        text-decoration: none;
    }
`
const Loginform = styled.form`
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
const Loginbutton = styled.button`
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
`

export default LoginPage;