import axios from "axios";

const PublicAPI = axios.create({
baseURL: "https://manovatebackend.onrender.com/",

});

export default PublicAPI;