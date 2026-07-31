import { FolderOpen, ListChecks, UserCheck, CalendarCheck, BarChart2 } from "lucide-react";

const pillars = [
  { icon: FolderOpen,    label: "Projetos centralizados",  iconColor: "text-slate-700",   bg: "bg-slate-100" },
  { icon: ListChecks,    label: "Tarefas organizadas",      iconColor: "text-blue-700",    bg: "bg-blue-100" },
  { icon: UserCheck,     label: "Responsáveis definidos",   iconColor: "text-emerald-700", bg: "bg-emerald-100" },
  { icon: CalendarCheck, label: "Prazos acompanhados",      iconColor: "text-amber-700",   bg: "bg-amber-100" },
  { icon: BarChart2,     label: "Progresso visual",         iconColor: "text-purple-700",  bg: "bg-purple-100" },
];

export default function LandingAbout() {
  return (
    <section
      id="sobre"
      className="py-20 bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Pilares visuais */}
          <div className="grid grid-cols-1 gap-3 w-full lg:max-w-[420px] shrink-0">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pillar.bg}`}>
                    <Icon size={18} className={pillar.iconColor} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{pillar.label}</span>
                </div>
              );
            })}
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="inline-flex w-fit items-center gap-2 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
              Sobre o TaskManager
            </div>

            <h2
              id="about-title"
              className="text-3xl font-bold text-slate-900 text-balance"
            >
              Uma plataforma para simplificar a gestão de projetos
            </h2>

            <p className="text-base text-gray-500 leading-relaxed text-pretty">
              O TaskManager foi desenvolvido para centralizar projetos e tarefas, facilitar a
              organização das equipes e tornar o acompanhamento das atividades mais simples e visual.
            </p>

            <p className="text-base text-gray-500 leading-relaxed text-pretty">
              Com uma interface limpa e intuitiva, cada membro da equipe sabe exatamente o que
              precisa fazer, quem é o responsável e qual é o prazo — sem complexidade desnecessária.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
