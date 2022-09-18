import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function login(body) {
  return axios.post(`${process.env.REACT_APP_API_URI}/login`, body);
}

function getPokemons(body) {
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemons?type=${body.type}`);
}

function signUp(body) {
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

function logout(profile) {
  const config = {
    headers: {
      user: profile.userId,
    },
  };
  return axios.delete(`${process.env.REACT_APP_API_URI}/logout`, config);
}

function getUser(profile) {
  const config = {
    headers: {
      user: profile.userId,
      Authorization: `Bearer ${profile.token}`,
    },
  };
  return axios.get(`${process.env.REACT_APP_API_URI}/user`, config);
}

function updateUser(profile, body) {
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

function checkoutCart(profile) {
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
  signUp,
  login,
  logout,
  getPokemon,
  getPokemons,
  getHistory,
  listCart,
  delCartItem,
  checkoutCart,
  getUser,
  updateUser,
  addCartItem,
};
