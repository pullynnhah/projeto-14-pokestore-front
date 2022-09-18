import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {listCart} from "../../tools/UseAxios";
import GlobalContext from "../../tools/GlobalContext";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Loader from "../commons/Loader";

export default function HistoryPage({type}) {
  const [history, setHistory] = useState(null);

  const {profile} = useContext(GlobalContext);

  useEffect(() => {
    const promisse = listCart(profile, "history");
    promisse.then(authorized);
    promisse.catch(unauthorized);
  }, []);

  function authorized(response) {
    const data = response.data;
    data.forEach(datum => {
      const images = [];
      for (let i = 0; i < datum.quantity; i++) {
        images.push(datum.image);
      }
      data.images = images;
    });
    setHistory(data);
  }

  function unauthorized(error) {
    if (error.response.data === undefined) {
      alert("Error: unhable to connect to server");
    } else {
      alert(error.response.data);
    }
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
    <>
      <Header type={type} />
      <Wrapper type={type}>
        History of user:
        <HistoryContainer>
          {history.map(({cartId, purchaseDate, deliveryDate, name, quantity, price, images}) => (
            <PurchaseHistory type={type}>
              <p>ID: {cartId}</p>
              <p>Purchase Date: {purchaseDate}</p>
              <p>Delivery Date: {deliveryDate}</p>
              <p>Pokemon: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Unit price: $ {price}.toFixed(2)</p>
              <h2>Total price: $ {(quantity * price).toFixed(2)}</h2>
              {
                <div>
                  {images.map(img => (
                    <img src={img} alt={name} />
                  ))}{" "}
                </div>
              }
            </PurchaseHistory>
          ))}
        </HistoryContainer>
      </Wrapper>
      <Footer type={type} />
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.pokemonBlue};
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].lighter}
  );
`;
const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;
const PurchaseHistory = styled.div`
  width: 400px;
  height: auto;
  background: linear-gradient(
    45deg,
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

  div {
    color: ${props => props.theme[props.type].dark};
    font-size: 15px;
    background: linear-gradient(
      to right,
      ${props => props.theme[props.type].light},
      ${props => props.theme[props.type].lighter},
      ${props => props.theme[props.type].light}
    );
    border-radius: 5px;
    margin-bottom: 8px;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding: 3px;
  }

  img {
    width: 60px;
    border-radius: 10px;
    margin: 5px;
  }
`;
