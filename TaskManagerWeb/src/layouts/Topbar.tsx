import {
  useAuth,
  } from "../contexts/AuthContext";
  
  function Topbar() {
  
  const {
  user,
  } = useAuth();
  
  const userInitials =
  user
  ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
  : "TM";
  
  function formatRole(
  role: string | undefined
  ) {
  
  switch (role) {
  
    case "ADMIN":
      return "Administrador";
  
    case "MANAGER":
      return "Gerente";
  
    case "DEVELOPER":
      return "Desenvolvedor";
  
    case "TESTER":
      return "Testador";
  
    case "USER":
      return "Usuário";
  
    default:
      return "Usuário";
  
  }
  
  }
  
  return ( <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 lg:px-8">
  
    <div className="relative w-full max-w-lg">
  
      <input
        type="text"
        placeholder="Buscar usuário..."
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
      />
  
    </div>
  
    <div className="ml-6 flex items-center gap-5">
  
      <button
        type="button"
        className="text-xl text-gray-500 transition hover:text-gray-800"
        aria-label="Notificações"
      >
        ♧
      </button>
  
      <button
        type="button"
        className="text-xl text-gray-500 transition hover:text-gray-800"
        aria-label="Mensagens"
      >
        ♢
      </button>
  
      <div className="flex items-center gap-3 border-l border-gray-200 pl-5">
  
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
  
          {userInitials}
  
        </div>
  
        <div className="hidden sm:block">
  
          <p className="text-sm font-semibold text-gray-900">
  
            {user
              ? `${user.firstName} ${user.lastName}`
              : "Usuário"
            }
  
          </p>
  
          <p className="text-xs text-gray-500">
  
            {formatRole(
              user?.role
            )}
  
          </p>
  
        </div>
  
      </div>
  
    </div>
  
  </header>
  
  );
  
  }
  
  export default Topbar;
  