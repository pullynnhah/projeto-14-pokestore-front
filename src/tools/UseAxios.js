import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

function Modelo(body, profile) {
  const config = {
    headers: {
      Authorization: profile.token,
      user: profile.userId,
      movimentationId: body.movimentationId,
    },
  };
  const promise = axios.post(`${process.env.REACT_APP_API_URI}/movimentation`, body, config);
  return promise;
}

// TODO: add validation
function getPokemon(pokedexNumber) {
  console.log(process.env.REACT_APP_API_URI);
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemon/${pokedexNumber}`);
}

export {getPokemon};
