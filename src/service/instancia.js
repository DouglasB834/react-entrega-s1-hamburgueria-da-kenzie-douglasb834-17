import axios from "axios";


export const instance = axios.create({
    baseURL: `https://hamburgueria-kenzie-json-serve.herokuapp.com`,
    timeout:5000 // trabalhar com loader ou msg 

})