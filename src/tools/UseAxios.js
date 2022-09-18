import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function Login(body) {
  return axios.post(`${process.env.REACT_APP_API_URI}/login`, body);
}

function getPokemons(body) {
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemons?type=${body.type}`);
}

function SignUp(body) {
  return axios.post(`${process.env.REACT_APP_API_URI}/signup`, body);
}

function getPokemon(pokedexNumber) {
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemon/${pokedexNumber}`);
}

function getHistory(body) {
  const config = {
    headers: {
      userid: body,
    },
  };
  return axios.get(`${process.env.REACT_APP_API_URI}/history`, config);
}

function Logout(profile) {
  const config = {
    headers: {
      user: profile.userId,
    },
  };
  return axios.delete(`${process.env.REACT_APP_API_URI}/logout`, config);
}

function GetUser(profile) {
  const config = {
    headers: {
      user: profile.userId,
      Authorization: `Bearer ${profile.token}`,
    },
  };
  return axios.get(`${process.env.REACT_APP_API_URI}/user`, config);
}

function UpdateUser(profile, body) {
  const config = {
    headers: {
      user: profile.userId,
      Authorization: `Bearer ${profile.token}`,
    },
  };
  return axios.put(`${process.env.REACT_APP_API_URI}/user`, body, config);
}

function listCart(profile, mode) {
  const config = {
    headers: {
      user: profile.userId,
    },
    params: {mode},
  };

  return axios.get(`${process.env.REACT_APP_API_URI}/cart`, config);
}

function delCartItem(profile) {
  return axios.post(`${process.env.REACT_APP_API_URI}/cart/${profile.userId}`);
}

function checkout(profile) {
  const config = {
    headers: {
      user: profile.userId,
    },
  };
  return axios.post(`${process.env.REACT_APP_API_URI}/checkout`, {}, config);
}

function addCartItem(quantity, pokedexNumber, profile) {
  const config = {
    headers: {
      pokedex: pokedexNumber,
      user: profile.userId,
    },
  };
  return axios.post(`${process.env.REACT_APP_API_URI}/cart`, {quantity}, config);
}

export {
  SignUp,
  Login,
  Logout,
  getPokemon,
  getPokemons,
  getHistory,
  listCart,
  delCartItem,
  checkout,
  GetUser,
  UpdateUser,
  addCartItem,
};
