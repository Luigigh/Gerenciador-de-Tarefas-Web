import {
    FolderOpen,
    LayoutDashboard,
    Users,
    CalendarDays,
    Flag,
    BarChart2,
  } from "lucide-react";
  
  const features = [
    {
      icon: FolderOpen,
      title: "Gerenciamento de projetos",
      description:
        "Organize projetos e acompanhe suas informações em um único lugar.",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
    },
    {
      icon: LayoutDashboard,
      title: "Quadro Kanban",
      description:
        "Visualize o andamento das tarefas e acompanhe cada etapa do trabalho.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      icon: Users,
      title: "Responsáveis",
      description:
        "Atribua atividades aos membros da equipe de forma prática e clara.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      icon: CalendarDays,
      title: "Prazos e planejamento",
      description:
        "Defina datas e acompanhe as entregas para manter o projeto no prazo.",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
    },
    {
      icon: Flag,
      title: "Prioridades",
      description:
        "Identifique rapidamente tarefas de baixa, média, alta ou crítica prioridade.",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: BarChart2,
      title: "Controle de progresso",
      description:
        "Acompanhe o status das atividades de forma visual e organizada.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
    },
  ];
  
  export default function LandingFeatures() {
    return (
      <section
        id="recursos"
        className="py-20 bg-gray-50"
        aria-labelledby="features-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da seção */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2
              id="features-title"
              className="text-3xl font-bold text-slate-900 text-balance"
            >
              Tudo o que sua equipe precisa para trabalhar com mais organização
            </h2>
          </div>
  
          {/* Grid de cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${feature.iconBg}`}
                  >
                    <Icon size={20} className={feature.iconColor} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  