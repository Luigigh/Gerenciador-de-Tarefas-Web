import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-background">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
          ✦ Produtividade simplificada
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
          Organize suas tarefas.<br />
          <span className="text-primary">Acompanhe seu progresso.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-balance">
          O TaskManager centraliza seu trabalho em um só lugar. Crie tarefas, organize equipes e visualize o progresso em tempo real — tudo de forma simples e intuitiva.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="#"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-md"
          >
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-xl hover:bg-muted transition-colors"
          >
            Entrar no sistema
          </a>
        </div>

        {/* Social proof */}
        <p className="text-xs text-muted-foreground mt-2">
          Gratuito para começar · Sem cartão de crédito
        </p>
      </div>
    </section>
  )
}
