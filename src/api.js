    import axios from "axios";

    const api = axios.create({
    baseURL: "https://bula.vercel.app/pesquisar?nome=dipirona&pagina=1",
    });

    export default api;
