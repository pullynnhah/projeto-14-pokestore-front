import axios from "axios";

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