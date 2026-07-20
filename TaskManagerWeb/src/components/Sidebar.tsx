import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils/constants";

const links = [
  { to: ROUTES.DASHBOARD, label: "Dashboard" },
  { to: ROUTES.USERS, label: "Usuários" },
  { to: ROUTES.TASKS, label: "Tarefas" },
  { to: ROUTES.PROFILE, label: "Perfil" },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-col border-r border-slate-200 bg-slate-900 text-slate-100">
      <div className="flex h-16 items-center px-6 text-lg font-semibold tracking-tight">
        App<span className="text-indigo-400">.</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === ROUTES.DASHBOARD}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
