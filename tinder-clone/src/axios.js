import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinder-copybackend.herokuapp.com",
})

export default instance;