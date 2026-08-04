import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  } from "react";
  
  import type {
  LoginResponse,
  } from "../services/authService";
  
  interface AuthUser {
  idUser: number;
  firstName: string;
  lastName: string;
  email: string;
  role: LoginResponse["role"];
  }
  
  interface AuthContextData {
  token: string | null;
  user: AuthUser | null;
  
  login: (
  loginResponse: LoginResponse
  ) => void;
  
  logout: () => void;
  }
  
  const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
  );
  
  interface AuthProviderProps {
  children: ReactNode;
  }
  
  export function AuthProvider({
  children,
  }: AuthProviderProps) {
  
  const [token, setToken] = useState<string | null>(
  localStorage.getItem("token")
  );
  
  const [user, setUser] = useState<AuthUser | null>(
  () => {
  

    const storedUser =
      localStorage.getItem("user");
  
    if (!storedUser) {
      return null;
    }
  
    try {
  
      return JSON.parse(
        storedUser
      ) as AuthUser;
  
    } catch {
  
      localStorage.removeItem(
        "user"
      );
  
      return null;
  
    }
  
  }

  
  );
  
  function login(
  loginResponse: LoginResponse
  ) {
  

  console.log(
    "[AUTH] Login realizado com sucesso"
  );
  
  const authenticatedUser: AuthUser = {
    idUser: loginResponse.idUser,
    firstName: loginResponse.firstName,
    lastName: loginResponse.lastName,
    email: loginResponse.email,
    role: loginResponse.role,
  };
  
  localStorage.setItem(
    "token",
    loginResponse.token
  );
  
  localStorage.setItem(
    "user",
    JSON.stringify(
      authenticatedUser
    )
  );
  
  setToken(
    loginResponse.token
  );
  
  setUser(
    authenticatedUser
  );

  
  }
  
  function logout() {
  

  console.log(
    "[AUTH] Logout realizado"
  );
  
  localStorage.removeItem(
    "token"
  );
  
  localStorage.removeItem(
    "user"
  );
  
  setToken(null);
  
  setUser(null);

  
  }
  
  return (
  <AuthContext.Provider
  value={{
  token,
  user,
  login,
  logout,
  }}
  >
  {children}
  </AuthContext.Provider>
  );
  
  }
  
  export function useAuth() {
  return useContext(AuthContext);
  }
  