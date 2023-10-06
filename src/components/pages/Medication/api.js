import axios from "axios";

const api = axios.create({
baseURL: "https://bula.vercel.app/categorias"
});

export default api;
