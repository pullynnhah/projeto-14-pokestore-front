import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import GlobalContext from "../../tools/GlobalContext.js";

import LoadSpinners from "../../assets/styles/LoadSpinners.js";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import { GetUser, UpdateUser } from "../../tools/UseAxios.js";
import bulbasaurProfile from "../../assets/images/bulbasaurProfile.png";
import charmanderProfile from "../../assets/images/charmanderProfile.png";
import squirtleProfile from "../../assets/images/squirtleProfile.png";
import pikachuProfile from "../../assets/images/pikachuProfile.png";




function EditProfilePage() {
    // eslint-disable-next-line
    const { profile, setProfile } = useContext(GlobalContext);
    const [isDisable, SetIsDisable] = useState(false);
    const [userData, setUserData] = useState(false);
    const [choosenPicture, setChoosenPicture] = useState(profile.userPicture);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = GetUser(profile);
        promise.then(res => {
            setUserData(res.data)
        });
    }, [profile]);

    console.log(userData)

    function handleForm(e) {
        e.preventDefault();
        SetIsDisable(true);
        if (isNaN(Number(e.target[4].value))) {
            return alert("Nº value should be a number");
        }
        const body = {
            name: e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1),
            zipCode: e.target[2].value,
            adress: e.target[3].value.charAt(0).toUpperCase() + e.target[3].value.slice(1),
            adressNumber: Number(e.target[4].value),
            neighborhood: e.target[5].value,
            city: e.target[6].value,
            contact: e.target[7].value,
            userPicture: choosenPicture
        };

        UpdateUser(profile, body)
            .then(() => {
                SetIsDisable(false);
                return navigate("/profile");
            })
            .catch(error => {
                console.error(error);
                alert(`${error.response.data}`);
                SetIsDisable(false);
            });
    }

    return (
        <Wrapper>
            <Header type={"default"} />
            <Container>
                <div><h2>Profile picture</h2></div>
                <ProfileImages >
                    <IMG src={bulbasaurProfile} alt="bulbasaur"
                        onClick={() => { setChoosenPicture(1) }}
                        choosenPicture={choosenPicture}
                        type={1}
                    />

                    <IMG src={charmanderProfile} alt="charmander"
                        onClick={() => { setChoosenPicture(2) }}
                        choosenPicture={choosenPicture}
                        type={2}
                    />

                    <IMG src={squirtleProfile} alt="squirtle"
                        onClick={() => { setChoosenPicture(3) }}
                        choosenPicture={choosenPicture}
                        type={3}
                    />

                    <IMG src={pikachuProfile} alt="pikachu"
                        onClick={() => { setChoosenPicture(4) }}
                        choosenPicture={choosenPicture}
                        type={4}
                    />

                </ProfileImages>
                <EditForm onSubmit={handleForm}>
                    <input type="text"
                        name="Name"
                        placeholder="Name"
                        disabled={isDisable}
                        required />

                    <input type="email"
                        name="email"
                        value={userData.email ? userData.email : "Email"}
                        disabled={true} />

                    <input type="number"
                        name="Zip-code"
                        placeholder="Zip-code"
                        disabled={isDisable} />

                    <input type="text"
                        name="Adress"
                        placeholder="Adress"
                        disabled={isDisable} />

                    <input type="number"
                        name="Nº"
                        placeholder="Nº"
                        disabled={isDisable} />

                    <input type="text"
                        name="Neighborhood"
                        placeholder="Neighborhood"
                        disabled={isDisable} />

                    <input type="text"
                        name="City"
                        placeholder="City"
                        disabled={isDisable} />

                    <input type="number"
                        name="Contact"
                        placeholder="Contact"
                        disabled={isDisable} />
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
    margin-bottom: 90px;
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
    h2{
        font: 400 26px/28px "Nunito", sans-serif;
        color: ${props => props.theme.default.dark};
    }
`;
const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
input {
  width: 85vw;
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
const ProfileImages = styled.div`
    width: 85vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const IMG = styled.img`
    width: 65px;
    border-radius: 50%;
    margin: 15px 0;
    border: ${props => (props.type === props.choosenPicture ? "solid 5px" : "none")};
    border-color: ${props => props.theme.default.dark};
`

export default EditProfilePage;