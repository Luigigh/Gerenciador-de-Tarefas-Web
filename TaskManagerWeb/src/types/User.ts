export interface User {
    id: number;
    firstname: string;
    lastName: string;
    email: string;
    phone: string;
    birth: string;
    role: string;
    status: string;
    createdAt: string;
}

export interface CreateUserData{
    firstname: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    birth: string;
}