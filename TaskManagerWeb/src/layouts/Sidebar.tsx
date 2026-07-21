import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center px-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
            ✓
          </div>

          <span className="text-xl font-bold text-gray-900">
            Task<span className="text-green-700">Manager</span>
          </span>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex flex-1 flex-col px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>

        <Link
          to="/dashboard"
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
            isActive("/dashboard")
              ? "bg-green-700 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span>▦</span>
          Dashboard
        </Link>

        <Link
          to="/users"
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
            isActive("/users")
              ? "bg-green-700 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span>♙</span>
          Usuários
        </Link>

        <Link
          to="/projects"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          <span>□</span>
          Projetos
        </Link>

        <Link
          to="/tasks"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          <span>✓</span>
          Tarefas
        </Link>

        <Link
          to="/calendar"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          <span>□</span>
          Calendário
        </Link>

        <Link
          to="/reports"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          <span>▥</span>
          Relatórios
        </Link>

        <div className="my-6 border-t border-gray-100" />

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Geral
        </p>

        <Link
          to="/settings"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          ⚙
          Configurações
        </Link>

        <Link
          to="/help"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          ?
          Ajuda
        </Link>

        <button
          className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50"
        >
          ↪
          Sair
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;