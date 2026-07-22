'use client'

import { useState } from 'react'
import { Menu, X, CheckSquare } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground text-lg">
          <CheckSquare className="w-5 h-5 text-primary" />
          TaskManager
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="#preview" className="hover:text-foreground transition-colors">Preview</a>
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Entrar
          </a>
          <a
            href="#"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Começar agora
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Funcionalidades</a>
          <a href="#preview" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>Preview</a>
          <hr className="border-border" />
          <a href="#" className="text-muted-foreground hover:text-foreground">Entrar</a>
          <a href="#" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center hover:opacity-90 transition-opacity">
            Começar agora
          </a>
        </div>
      )}
    </header>
  )
}
