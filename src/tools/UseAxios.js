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
      user: body,
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
      "user": profile.userId,
      "Authorization": `Bearer ${profile.token}`
    }
  }
  const promise = axios.get(`${process.env.REACT_APP_API_URI}/user`, config);
  return promise;
};

function UpdateUser(profile, body) {
  const config = {
    headers: {
      "user": profile.userId,
      "Authorization": `Bearer ${profile.token}`
    }
  }
  const promise = axios.put(`${process.env.REACT_APP_API_URI}/user`, body, config);
  return promise;
};

function listCart(profile, mode) {
  const config = {
    headers: {
      user: profile.userId,
    },
    
  }
  const params = {mode:mode}
  return axios.get(`${process.env.REACT_APP_API_URI}/cart/?mode=${params.mode}`, config);
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
  return axios.post(`${process.env.REACT_APP_API_URI}/checkout`, config);
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
  UpdateUser 
};