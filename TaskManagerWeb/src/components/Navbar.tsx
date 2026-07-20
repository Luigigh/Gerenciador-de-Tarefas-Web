import { useAuth } from "../hooks/useAuth";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="text-sm text-slate-500">
        Bem-vindo, <span className="font-medium text-slate-900">{user?.name}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <button
          onClick={logout}
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
