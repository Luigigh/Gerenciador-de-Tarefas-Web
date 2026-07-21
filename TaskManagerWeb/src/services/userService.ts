import api from "../api/axios";
import type { CreateUserData, User } from "../types/User";

export async function getUsers(): Promise<User[]> {
  console.log("[USER SERVICE] Buscando usuários");

  const response = await api.get<User[]>("/users");

  console.log("[USER SERVICE] Usuários recebidos:", response.data);

  return response.data;
}


export async function createUser(
    userData: CreateUserData): Promise<User> {
      
      console.log("[USER SERVICE createUser]", userData);

      const response = await api.post<User>("/users", userData);

      console.log("[USER SERVICE] User criado com sucesso!");

      return response.data;

}