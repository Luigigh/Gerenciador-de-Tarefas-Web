import api from "../api/axios";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export async function loginUser(

    credentials: LoginRequest
): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
        "auth/login",
        credentials
    );

    return response.data
}