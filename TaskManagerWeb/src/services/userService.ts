import api from "../api/axios";


export async function getUsers() {
    console.log("[USER SERVICE] Buscando usuários");

    const response = await api.get("/users");

    console.log("[USER SERVICE] Usuarios recebidos.");

    return response.data;
}