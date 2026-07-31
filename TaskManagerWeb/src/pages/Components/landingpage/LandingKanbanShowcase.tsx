import { CheckCircle2 } from "lucide-react";
import KanbanPreview from "./KanbanPreview";

const highlights = [
  "Visualize todas as tarefas em um único quadro",
  "Organize por status: não iniciada, em progresso, em revisão e concluída",
  "Identifique tarefas atrasadas imediatamente",
  "Filtre por projeto, responsável e prioridade",
];

export default function LandingKanbanShowcase() {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="kanban-showcase-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Texto */}
          <div className="flex flex-col gap-6 lg:max-w-[420px] shrink-0">
            <div className="inline-flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              Quadro Kanban
            </div>

            <h2
              id="kanban-showcase-title"
              className="text-3xl font-bold text-emerald-900 text-balance"
            >
              Visualize o progresso do trabalho em um só lugar
            </h2>

            <p className="text-base text-gray-500 leading-relaxed text-pretty">
              Acompanhe o andamento das tarefas, identifique prioridades e mantenha sua equipe
              alinhada durante todas as etapas do projeto.
            </p>

            <ul className="flex flex-col gap-3" aria-label="Destaques do Kanban">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={17}
                    className="text-emerald-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prévia do Kanban */}
          <div className="flex-1 min-w-0 w-full">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              {/* Cabeçalho simulado do sistema */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">T</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">TaskManager</span>
                  <span className="text-gray-300 text-xs">/</span>
                  <span className="text-xs text-gray-500">Portal Interno</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                </div>
              </div>
              <KanbanPreview maxColumns={4} maxCards={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
