import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AuthContextData {
  token: string | null;
  login: (token: string) => void;
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

  function login(token: string) {
    console.log("[AUTH] Login realizado com sucesso");

    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {
    console.log("[AUTH] Logout realizado");

    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
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