import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;

      console.log(
        "[API] Token adicionado à requisição:",
        config.url
      );
    } else {
      console.log(
        "[API] Requisição sem token:",
        config.url
      );
    }

    return config;
  },
  (error) => {
    console.error(
      "[API] Erro ao preparar requisição:",
      error
    );

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(
      "[API] Resposta recebida:",
      response.status,
      response.config.url
    );

    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "[API] Erro na resposta:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error(
        "[API] Nenhuma resposta recebida do servidor"
      );
    } else {
      console.error(
        "[API] Erro ao configurar requisição:",
        error.message
      );
    }

    return Promise.reject(error);
  }
);

export default api;