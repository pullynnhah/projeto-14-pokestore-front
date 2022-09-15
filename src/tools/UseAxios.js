import axios from "axios";
import dotenv from "dotenv";

<<<<<<< HEAD
const mainURL = "http://localhost:5000";

function SignUp(body) {
    const promise = axios.post(`${mainURL}/signup`, body);
    return promise;
};

function Login(body, profile) {
    const promise = axios.post(`${mainURL}/login`, body);
    return promise;
};





export { SignUp, Login };
=======
dotenv.config();

function SignUp(body) {
  const promise = axios.post(`${process.env.REACT_APP_API_URI}/signup`, body);
  return promise;
}

// TODO: add validation
function getPokemon(pokedexNumber) {
  console.log(process.env.REACT_APP_API_URI);
  return axios.get(`${process.env.REACT_APP_API_URI}/pokemon/${pokedexNumber}`);
}

export {getPokemon, SignUp};
>>>>>>> master
