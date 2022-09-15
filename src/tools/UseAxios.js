import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


function SignUp(body) {
    const promise = axios.post(`${mainURL}/signup`, body);
    return promise;
};

// TODO: add validation
function getPokemon(pokedexNumber) {
  console.log(process.env.REACT_APP_API_URI);
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemon/${pokedexNumber}`);
}

export {getPokemon, SignUp};
