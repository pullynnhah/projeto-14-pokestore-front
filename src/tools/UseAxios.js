import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


function Login(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URI}/login`, body);
    return promise;
};

// TODO: add validation
function getPokemons(body) {
    const config = {
        headers: {

        }
    };
    const promise = axios.get(`${process.env.REACT_APP_API_URI}/pokemons?type=${body.type}`, config);
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

function getHistory(body) {
    const config = {
        headers: {
            userid:body
        }
    }
    const promise = axios.get(`${process.env.REACT_APP_API_URI}/history`, config);
    return promise;
}

export { SignUp, Login, getPokemon, getPokemons, getHistory };
