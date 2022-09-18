import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState, useContext, useEffect} from "react";
import GlobalContext from "../../tools/GlobalContext.js";

import Header from "../commons/Header.js";
import Footer from "../commons/Footer.js";
import {getUser} from "../../tools/UseAxios.js";
import Loader from "../commons/Loader";

function ProfilePage() {
  // eslint-disable-next-line
  const {profile} = useContext(GlobalContext);
  // const [userName, setUserName] = useState();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  let editButtonText = "Edit your profile";
  if (
    !userData?.adress ||
    !userData?.adressNumber ||
    !userData?.city ||
    !userData?.contact ||
    !userData?.neighborhood ||
    !userData?.zipCode
  ) {
    editButtonText = "Complete your profile";
  }

  useEffect(() => {
    const promise = getUser(profile);
    promise.then(res => {
      setUserData(res.data);
    });
  }, [profile]);

  if (!userData) {
    return (
      <>
        <Header type="default" />
        <Loader />
        <Footer type="default" />
      </>
    );
  }

  return (
    <Wrapper>
      <Header type={"default"} />
      <Container>
        <div>
          <h1>
            Hello,{" "}
            {userData.name
              ? userData.name.charAt(0).toUpperCase() + userData.name.slice(1)
              : "J. Doe"}
          </h1>
        </div>
        <Box
          onClick={() => {
            return navigate("/profile/edit");
          }}>
          <h2>{editButtonText}</h2>
        </Box>
        <Box
          onClick={() => {
            return navigate("/history");
          }}>
          <h2>My history</h2>
        </Box>
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

  h1 {
    margin-top: 75px;
    font: 600 26px/28px "Nunito", sans-serif;
    color: ${props => props.theme.pokemonBlue};
  }
`;
const Box = styled.button`
  width: 80vw;
  height: 50px;
  background-color: ${props => props.theme.default.medium};
  color: ${props => props.theme.white};
  text-align: center;
  font: 600 22px/24px "Nunito", sans-serif;
  border-radius: 5px;
  margin-top: 25px;
`;

export default ProfilePage;
