import { CheckSquare, CheckCircle2, Clock, CircleDot, RotateCcw } from "lucide-react";

// Mini ilustração de cards de tarefas representando o sistema
const miniTasks = [
  {
    title: "Desenvolver tela de dashboard",
    priority: "CRITICAL",
    priorityLabel: "Crítica",
    priorityClass: "bg-purple-100 text-purple-800 border border-purple-200",
    status: "Em progresso",
    statusIcon: <Clock size={9} className="text-blue-500" />,
    statusClass: "text-blue-600",
    project: "Portal Interno",
    progress: 65,
    progressColor: "bg-blue-500",
  },
  {
    title: "Integrar API de pagamentos",
    priority: "HIGH",
    priorityLabel: "Alta",
    priorityClass: "bg-red-100 text-red-700 border border-red-200",
    status: "Em revisão",
    statusIcon: <RotateCcw size={9} className="text-amber-500" />,
    statusClass: "text-amber-600",
    project: "E-commerce",
    progress: 90,
    progressColor: "bg-amber-400",
  },
  {
    title: "Configurar ambiente de produção",
    priority: "MEDIUM",
    priorityLabel: "Média",
    priorityClass: "bg-amber-100 text-amber-700 border border-amber-200",
    status: "Concluída",
    statusIcon: <CheckCircle2 size={9} className="text-emerald-500" />,
    statusClass: "text-emerald-600",
    project: "App Mobile",
    progress: 100,
    progressColor: "bg-emerald-500",
  },
  {
    title: "Estruturar banco de dados",
    priority: "HIGH",
    priorityLabel: "Alta",
    priorityClass: "bg-red-100 text-red-700 border border-red-200",
    status: "Não iniciada",
    statusIcon: <CircleDot size={9} className="text-slate-400" />,
    statusClass: "text-slate-500",
    project: "Portal Interno",
    progress: 0,
    progressColor: "bg-slate-300",
  },
];

const statCards = [
  { label: "Tarefas ativas", value: "24", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { label: "Concluídas", value: "118", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  { label: "Em revisão", value: "7", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
];

export default function LoginVisual() {
  return (
    <div className="h-full flex flex-col justify-between px-10 py-10 bg-emerald-900 text-white">
      {/* Logo e nome */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
          <CheckSquare size={18} className="text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">TaskManager</span>
      </div>

      {/* Texto institucional */}
      <div className="flex flex-col gap-4 my-8">
        <h2 className="text-3xl font-bold leading-tight text-balance text-white">
          Organize o trabalho.<br />
          Acompanhe o progresso.<br />
          Entregue melhores resultados.
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed text-pretty max-w-xs">
          Centralize projetos, tarefas, responsáveis e prazos em uma única plataforma.
        </p>
      </div>

      {/* Stats resumidas */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {statCards.map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border px-3 py-2.5 flex flex-col gap-0.5 ${s.bg}`}
          >
            <span className={`text-xl font-bold ${s.color}`}>{s.value}</span>
            <span className="text-[10px] text-slate-500 font-medium leading-tight">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Mini cards de tarefas */}
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Visão geral do quadro
        </p>
        <div className="flex flex-col gap-2">
          {miniTasks.map((task) => (
            <div
              key={task.title}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 flex flex-col gap-2 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-medium text-white/90 leading-snug flex-1 line-clamp-1">
                  {task.title}
                </p>
                <span
                  className={`shrink-0 text-[9px] font-medium px-1.5 py-0.5 rounded-full ${task.priorityClass}`}
                >
                  {task.priorityLabel}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {task.statusIcon}
                  <span className={`text-[10px] font-medium ${task.statusClass}`}>
                    {task.status}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 truncate max-w-[90px]">
                  {task.project}
                </span>
              </div>

              {/* Barra de progresso */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${task.progressColor}`}
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé discreto */}
      <p className="text-[11px] text-slate-500 mt-6">
        &copy; {new Date().getFullYear()} TaskManager. Todos os direitos reservados.
      </p>
    </div>
  );
}
