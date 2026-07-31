import {Link} from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import KanbanPreview from "./kanbanPreview";

export default function LandingHero() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white"
      aria-label="Seção principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Conteúdo textual */}
          <div className="flex flex-col gap-6 lg:max-w-[480px] shrink-0">
            <div className="inline-flex w-fit items-center gap-2 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              Plataforma de gestão de projetos
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight text-balance">
              Organize projetos. Gerencie tarefas. Entregue melhores resultados.
            </h1>

            <p className="text-base text-gray-500 leading-relaxed text-pretty">
              Centralize projetos, tarefas, responsáveis e prazos em uma única plataforma e
              acompanhe o progresso da sua equipe de forma simples e organizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-slate-700 transition-colors"
              >
                Acessar o sistema
                <ArrowRight size={16} />
              </Link>
              <a
                href="#recursos"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 text-sm font-medium px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Conhecer recursos
                <ChevronDown size={16} />
              </a>
            </div>

            {/* Estatísticas */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">4</span>
                <span className="text-xs text-gray-500">Status de tarefas</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">4</span>
                <span className="text-xs text-gray-500">Níveis de prioridade</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs text-gray-500">Visual e organizado</span>
              </div>
            </div>
          </div>

          {/* Prévia visual do Kanban */}
          <div className="flex-1 min-w-0">
            <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden">
              {/* Barra de janela simulada */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-gray-400 font-medium">TaskManager — Quadro Kanban</span>
              </div>
              <KanbanPreview maxColumns={4} maxCards={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
