"use client";

import type { Task, TaskStatus, TaskPriority } from "../../types/Task";
import { CalendarDays } from "lucide-react";

export interface RecentTasksProps {
  tasks: Task[];
  /** Numero maximo de tasks exibidas. Default: 8 */
  limit?: number;
}

// ---- Status ----------------------------------------------------------------

const STATUS_LABELS: Record<TaskStatus, string> = {
  NOT_STARTED: "Nao iniciada",
  IN_PROGRESS: "Em progresso",
  REVIEW: "Em revisao",
  COMPLETED: "Concluida",
};

const STATUS_CLASSES: Record<TaskStatus, string> = {
  NOT_STARTED: "bg-slate-100 text-slate-600",
  IN_PROGRESS:  "bg-blue-50 text-blue-700",
  REVIEW:       "bg-amber-50 text-amber-700",
  COMPLETED:    "bg-emerald-50 text-emerald-700",
};

// ---- Prioridade ------------------------------------------------------------

const PRIORITY_LABELS: Record<TaskPriority, string> = {
  LOW:      "Baixa",
  MEDIUM:   "Media",
  HIGH:     "Alta",
  CRITICAL: "Critica",
};

const PRIORITY_CLASSES: Record<TaskPriority, string> = {
  LOW:      "bg-emerald-50 text-emerald-700",
  MEDIUM:   "bg-amber-50  text-amber-700",
  HIGH:     "bg-red-50    text-red-600",
  CRITICAL: "bg-purple-50 text-purple-700",
};

// ---- Helpers ---------------------------------------------------------------

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function isOverdue(task: Task): boolean {
  if (task.status === "COMPLETED" || !task.expectedFinalDate) return false;
  return new Date(task.expectedFinalDate) < new Date();
}

// ---- Componente ------------------------------------------------------------

export default function RecentTasks({ tasks, limit = 8 }: RecentTasksProps) {
  // Mostra as tasks mais recentes (por createdAt desc), limitadas
  const sorted = [...tasks]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Cabecalho */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-base font-semibold text-slate-900">Tasks recentes</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Ultimas {sorted.length} tasks adicionadas ao sistema
        </p>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm" aria-label="Tasks recentes">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60">
              <th scope="col" className="text-left px-6 py-3 font-medium text-gray-500 whitespace-nowrap">
                Titulo
              </th>
              <th scope="col" className="text-left px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                Projeto
              </th>
              <th scope="col" className="text-left px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                Responsavel
              </th>
              <th scope="col" className="text-left px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                Prioridade
              </th>
              <th scope="col" className="text-left px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                Status
              </th>
              <th scope="col" className="text-left px-4 py-3 font-medium text-gray-500 whitespace-nowrap pr-6">
                Prazo
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((task, idx) => {
              const overdue = isOverdue(task);
              return (
                <tr
                  key={task.idTask}
                  className={`border-b border-gray-50 hover:bg-gray-50/70 transition-colors ${
                    idx === sorted.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  {/* Titulo */}
                  <td className="px-6 py-3.5 max-w-[200px]">
                    <span className="font-medium text-slate-800 truncate block" title={task.title}>
                      {task.title}
                    </span>
                  </td>

                  {/* Projeto */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="text-gray-500">{task.projectName}</span>
                  </td>

                  {/* Responsavel */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">
                        {task.responsibleName.charAt(0)}
                      </div>
                      <span className="text-gray-600">{task.responsibleName}</span>
                    </div>
                  </td>

                  {/* Prioridade */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${
                        PRIORITY_CLASSES[task.priority as TaskPriority]
                      }`}
                    >
                      {PRIORITY_LABELS[task.priority as TaskPriority]}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${
                        STATUS_CLASSES[task.status]
                      }`}
                    >
                      {STATUS_LABELS[task.status]}
                    </span>
                  </td>

                  {/* Prazo */}
                  <td className="px-4 py-3.5 pr-6 whitespace-nowrap">
                    <div
                      className={`flex items-center gap-1.5 text-xs ${
                        overdue ? "text-red-500 font-medium" : "text-gray-400"
                      }`}
                    >
                      <CalendarDays size={12} />
                      <span>{formatDate(task.expectedFinalDate)}</span>
                      {overdue && (
                        <span className="text-red-400 text-[10px] font-semibold uppercase tracking-wide">
                          Atrasada
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}

            {sorted.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-400">
                  Nenhuma task encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
