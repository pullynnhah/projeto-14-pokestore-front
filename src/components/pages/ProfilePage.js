import Header from "../commons/Header";
import Footer from "../commons/Footer";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const navigate = useNavigate();

    return (
        <Wrapper>
                <Header type={"default"} />
                <Container>
                    <div>
                        <h1>Hello, Fulaninho</h1>
                    </div>
                    <Teste onClick={()=>{return (navigate("/profile/edit"))}}> 
                        <h2>Complete your profile</h2>
                    </Teste>
                    <Teste onClick={()=>{return (navigate("/history"))}}> 
                        <h2>My history</h2>
                    </Teste>
                </Container>
                <Footer type={"default"} />
        </Wrapper>
    );
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
    margin: 65px 0;
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
const Teste = styled.button`
width: 250px;
height: 50px;
background-color: ${props => props.theme.default.medium};
color: ${props => props.theme.white};
text-align: center;
font: 600 22px/24px "Nunito", sans-serif;
border-radius: 5px;
margin-top: 25px;
`;


export default ProfilePage;