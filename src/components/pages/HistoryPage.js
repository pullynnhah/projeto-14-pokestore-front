import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listCart } from "../../tools/UseAxios";
import GlobalContext from "../../tools/GlobalContext";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Loader from "../commons/Loader";
import Page from "../commons/Page";

export default function HistoryPage({ type }) {
    const [history, setHistory] = useState(null);
    const navigate = useNavigate();
    const { profile } = useContext(GlobalContext);

    useEffect(() => {
        const promisse = listCart(profile, "history");
        promisse.then(authorized);
        promisse.catch(unauthorized);
    }, []);

    function authorized(response) {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            data[i].imgLength = [];
            for (let j = 0; j < data[i].quantity; j++) {
                data[i].imgLength.push(data[i].image);
            }
        }
        setHistory(response.data);
        console.log(response.data)
    }

    function unauthorized(error) {
        setHistory([]);
        if (error.response.data === undefined) {
            alert('Error: unhable to connect to server');
        }
        else {
            alert(error.response.data);
        }
    }

    function navigateHome(){
        navigate('/');
    }

    if (!history) {
        return (
            <>
                <Header type={type} />
                <Loader type={type} />
                <Footer type={type} />
            </>
        );
    }

    return (
        <Page type={type}>
            <Wrapper type={type}>
                History of user:
                <HistoryContainer>{history.length == 0 ?
                    <div>
                        You dont have any purchase yet, start buying:
                        <HomeNavigate onClick={navigateHome}>here</HomeNavigate>
                    </div>
                    : history.map(hist =>
                        <PurchaseHistory type={hist.type}>
                            <div>ID: {hist.cartId}</div>
                            <div>Purchase Date: {hist.purchaseDate}</div>
                            <div>Delivery Date: {hist.deliveryDate}</div>
                            <div>Pokemon: {hist.name}</div>
                            <div>Quantity: {hist.quantity}</div>
                            <div>Total price: ${(hist.quantity * hist.price).toFixed(2)}</div>
                            {
                                <div>{hist.imgLength.map((img) => (<img src={img} />))} </div>
                            }

                        </PurchaseHistory>)}
                </HistoryContainer>
            </Wrapper>
        </Page>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    color: ${props => props.theme.pokemonBlue};
    font-size: 30px;
    font-weight: 800;
`
const HistoryContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const PurchaseHistory = styled.div`
    width: 400px;
    height: auto;
    background: linear-gradient( 45deg,
        ${props => props.theme[props.type].light},
        ${props => props.theme[props.type].lighter},
        ${props => props.theme[props.type].light}
        );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 15px;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
    div{
        color: ${props => props.theme[props.type].dark};
        font-size: 15px;
        background:  linear-gradient( to right,
            ${props => props.theme[props.type].light},
            ${props => props.theme[props.type].lighter},
            ${props => props.theme[props.type].light}
            );
        border-radius: 5px;
        margin-bottom: 8px;
        box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
        overflow: auto;
        padding: 3px;
        width: 100%;
        display: flex;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin: 5px;
        object-fit: cover;
    }
`
const HomeNavigate = styled.span`
    text-decoration: underline;
`
