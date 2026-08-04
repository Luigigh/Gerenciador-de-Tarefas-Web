import api from "../api/axios";

export type RoleUser =
| "ADMIN"
| "MANAGER"
| "DEVELOPER"
| "TESTER"
| "USER";

interface LoginRequest {
email: string;
password: string;
}

export interface LoginResponse {
token: string;
idUser: number;
firstName: string;
lastName: string;
email: string;
role: RoleUser;
}

export async function loginUser(
credentials: LoginRequest
): Promise<LoginResponse> {

const response = await api.post<LoginResponse>(
"/auth/login",
credentials
);

return response.data;

}
