import { ArrowRight, CheckSquare } from 'lucide-react'

export function Cta() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
          <CheckSquare className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
          Pronto para organizar seu trabalho?
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed text-balance">
          Comece agora, de graça. Sem complicações, sem cartão de crédito.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-primary-foreground text-primary font-semibold px-7 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-md"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground font-medium px-7 py-3 rounded-xl hover:bg-primary-foreground/10 transition-colors"
          >
            Entrar no sistema
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <CheckSquare className="w-4 h-4 text-primary" />
          TaskManager
        </div>
        <p className="text-xs">© {new Date().getFullYear()} TaskManager. Todos os direitos reservados.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  )
}
