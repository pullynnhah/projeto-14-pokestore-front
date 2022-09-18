import {useContext, useEffect, useState} from "react";
import Product from "../Product";
import styled from "styled-components";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import GlobalContext from "../../tools/GlobalContext";
import Loader from "../commons/Loader";
import {checkoutCart, listCart} from "../../tools/UseAxios";

export default function CartPage() {
  const [products, setProducts] = useState(null);
  const {profile} = useContext(GlobalContext);

  function getCart() {
    const promise = listCart(profile, "cart");
    promise.then(response => {
      setProducts(response.data);
      console.log(response.data);
    });
  }

  useEffect(() => {
    getCart();
  }, []);

  async function checkout() {
    try {
      await checkoutCart(profile);
      getCart();
    } catch (e) {
      console.log(e.message);
    }
  }
  const type = "default";

  if (!products) {
    return (
      <>
        <Header type={type} />
        <Loader />
        <Footer type={type} />
      </>
    );
  }
  return (
    <>
      <Header type={type} />
      <Wrapper type={type}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
        <div className="price">
          <p>Total:</p>
          <h2>
            ${" "}
            {products.reduce((ac, product) => ac + product.price * product.quantity, 0).toFixed(2)}
          </h2>
        </div>
        <button onClick={checkout}>Checkout</button>
      </Wrapper>
      <Footer type={type} />
    </>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 140px);
  margin: 70px 0 60px;
  padding: 20px;
  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].lighter}
  );

  .price {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;

    p {
      font-size: 28px;
      line-height: 28px;
      color: ${props => props.theme.pokemonBlue};
    }

    h2 {
      font-weight: 800;
      font-size: 32px;
      line-height: 32px;
      color: ${props => props.theme.pokemonBlue};
    }
  }

  button {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 60px;
    background: ${props => props.theme.pokemonBlue};
    color: ${props => props.theme.pokemonYellow};
    font-weight: 900;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    border-radius: 10px;
  }
`;
