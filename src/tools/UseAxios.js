import axios from "axios";

const mainURL = "http://localhost:5000";


function Modelo(body, profile) {
    const config = {
        headers: {
            "Authorization": profile.token,
            "user": profile.userId,
            "movimentationId": body.movimentationId
        }
    };
    const promise = axios.post(`${mainURL}/movimentation`, body, config );
    return promise;
};

export { Modelo };