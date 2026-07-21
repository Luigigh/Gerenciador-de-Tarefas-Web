import api from "../api/axios";
import type { User } from "../types/User";

export async function getUsers(): Promise<User[]> {
  console.log("[USER SERVICE] Buscando usuários");

  const response = await api.get<User[]>("/users");

  console.log("[USER SERVICE] Usuários recebidos:", response.data);

  return response.data;
}