"use client";

import { useState } from "react";
import {Link} from "react-router-dom";
import { Menu, X, CheckSquare } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
];

export default function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center">
              <CheckSquare size={16} className="text-white" />
            </div>
            <span className="text-base font-bold text-slate-900 tracking-tight">
              TaskManager
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-emerald-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-white-900 bg-emerald-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Entrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-700 hover:text-emerald-900 hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-gray-100">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-center text-white bg-slate-900 px-4 py-2.5 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Entrar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
