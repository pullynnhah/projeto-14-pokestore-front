import axios from "axios";
import dotenv from "dotenv";




dotenv.config();


function Login(body) {
  const promise = axios.post(`${process.env.REACT_APP_API_URI}/login`, body);
  return promise;
};

function getPokemons(body) {
  const config = {
    headers: {
      "type": body.type
    }
  };
  const promise = axios.get(`${process.env.REACT_APP_API_URI}/pokemons`, config);
  return promise;
};

function SignUp(body) {
  const promise = axios.post(`${process.env.REACT_APP_API_URI}/signup`, body);
  return promise;
}

// TODO: add validation
function getPokemon(pokedexNumber) {
  console.log(process.env.REACT_APP_API_URI);
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemon/${pokedexNumber}`);
}

function Logout(profile) {
  const config = {
    headers: {
      "user": profile.userId
    }
  }
  const promise = axios.delete(`${process.env.REACT_APP_API_URI}/logout`, config);
  return promise;
};

export { SignUp, Login, getPokemon, getPokemons, Logout };
