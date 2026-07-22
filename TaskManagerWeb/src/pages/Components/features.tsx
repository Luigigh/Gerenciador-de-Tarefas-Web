import { ClipboardList, Users, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: ClipboardList,
    title: 'Gerenciamento de tarefas',
    description:
      'Crie, organize e priorize tarefas com facilidade. Defina prazos, responsáveis e acompanhe o status em tempo real.',
  },
  {
    icon: Users,
    title: 'Organização de equipes',
    description:
      'Adicione membros ao seu espaço de trabalho, delegue tarefas e colabore de forma transparente com toda a equipe.',
  },
  {
    icon: BarChart3,
    title: 'Acompanhamento de progresso',
    description:
      'Visualize relatórios claros sobre o andamento dos projetos. Saiba o que está concluído e o que ainda precisa de atenção.',
  },
  {
    icon: ShieldCheck,
    title: 'Autenticação segura',
    description:
      'Seus dados protegidos com autenticação moderna e controle de acesso por perfis. Segurança sem complicações.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tudo que você precisa para <span className="text-primary">ser mais produtivo</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto text-balance leading-relaxed">
            Ferramentas essenciais reunidas em uma interface limpa e fácil de usar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-base">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
