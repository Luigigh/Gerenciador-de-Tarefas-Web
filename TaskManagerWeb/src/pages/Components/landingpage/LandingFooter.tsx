import {Link} from "react-router-dom";
import { CheckSquare } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Entrar", href: "/login" },
];

export default function LandingFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo e descrição */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 flex items-center justify-center">
                <CheckSquare size={14} className="text-white" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold text-emerald-900 tracking-tight">TaskManager</span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed">
              Plataforma de gerenciamento de projetos e tarefas. Centralize, organize e acompanhe o
              trabalho da sua equipe de forma visual e eficiente.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-emerald-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            &copy; 2026 TaskManager. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
