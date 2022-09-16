import Page from "./Page";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHistory } from "../tools/UseAxios";


export default function HistoryPage({ children, type }) {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        const userId = '3';
        const promisse = getHistory(userId);
        promisse.then(autorized);
        promisse.catch(unautorized);
    }, [])

    function autorized(response) {
        setHistory(response.data);
        console.log(response.data)
    }

    function unautorized(error) {
        if (error.response.data === undefined) {
            alert('Error: unhable to connect to server');
        }
        else {
            alert(error.response.data);
        }
    }

    return (
        <Page type={type}>
            <Wrapper type={type}>
                History of user:
                <HistoryContainer>
                    {history.length === 0 ? '' : history.map(hist => 
                    <PurchaseHistory type={'water'}>
                        <div>Purchase ID: {hist._id}</div>
                        <div>Purchase Date: {hist.purchaseDate}</div>
                        <div>Delivery Date: {hist.deliveryDate}</div>
                        <div>Pokemon ID: {hist.pokemonId}</div>
                        <div>Quantity: {hist.quantity}</div>
                    </PurchaseHistory> )}
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
`
const PurchaseHistory = styled.div`
    width: 400px;
    height: 120px;
    background: linear-gradient(
        ${props => props.theme[props.type].lighter},
        ${props => props.theme[props.type].light}
        );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin: 15px;
    overflow-y: auto;
    div{
        color: black;
        font-size: 15px;   
    }
`