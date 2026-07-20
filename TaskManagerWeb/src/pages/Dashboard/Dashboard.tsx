import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getUsers } from "../../services/userService";

function Dashboard() {
  const { logout } = useAuth();

  useEffect(() => {
    async function loadUsers() {
      try {
        const users = await getUsers();

        console.log(
          "[DASHBOARD] Usuários carregados:",
          users
        );

      } catch (error) {
        console.error(
          "[DASHBOARD] Erro ao buscar usuários:",
          error
        );
      }
    }

    loadUsers();
  }, []);

  function handleLogout() {
    console.log(
      "[DASHBOARD] Botão de logout pressionado"
    );

    logout();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-3xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Você está autenticado no TaskManager.
      </p>

      <button
        onClick={handleLogout}
        className="mt-6 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
      >
        Sair
      </button>

    </main>
  );
}

export default Dashboard;