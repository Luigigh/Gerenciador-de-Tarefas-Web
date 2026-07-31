import { FolderPlus, ListTodo, UserCheck, LayoutDashboard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FolderPlus,
    title: "Crie um projeto",
    description:
      "Cadastre seu projeto com nome, descrição e defina as informações gerais da iniciativa.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    numberColor: "text-slate-300",
  },
  {
    number: "02",
    icon: ListTodo,
    title: "Adicione as tarefas",
    description:
      "Crie as atividades que precisam ser realizadas e organize-as dentro do projeto.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    numberColor: "text-blue-200",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Defina responsáveis, prioridades e prazos",
    description:
      "Atribua cada tarefa a um membro da equipe, defina a prioridade e o prazo esperado de entrega.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    numberColor: "text-amber-200",
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Acompanhe pelo Kanban",
    description:
      "Visualize o progresso de todas as tarefas no quadro Kanban e mantenha a equipe alinhada.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    numberColor: "text-emerald-200",
  },
];

export default function LandingHowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-white"
      aria-labelledby="how-it-works-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2
            id="how-it-works-title"
            className="text-3xl font-bold text-emerald-900 text-balance"
          >
            Como funciona
          </h2>
          <p className="mt-3 text-base text-gray-500 leading-relaxed">
            Em quatro etapas simples, sua equipe já está pronta para trabalhar de forma organizada.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex flex-col gap-4 relative">
                {/* Linha conectora (apenas desktop, exceto último) */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-9 left-[calc(50%+28px)] right-0 h-px bg-gray-200"
                    aria-hidden="true"
                  />
                )}

                <div className="flex flex-col gap-4">
                  {/* Ícone + número */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center relative ${step.iconBg} shrink-0`}
                    >
                      <Icon size={22} className={step.iconColor} aria-hidden="true" />
                      <span
                        className={`absolute -top-1 -right-1 text-[10px] font-bold ${step.numberColor} leading-none`}
                        aria-label={`Etapa ${step.number}`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold text-emerald-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
