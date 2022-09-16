import Header from "../commons/Header";
import Footer from "../commons/Footer";
import styled from "styled-components";

function ProfilePage() {

    return (
        <Wrapper>
            <Container>
                <Header type={"default"} />
                <Footer type={"default"} />
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

export default ProfilePage;