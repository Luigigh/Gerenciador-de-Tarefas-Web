import type { Task } from "../../types/Task";

import {
CalendarDays,
FolderKanban,
Pencil,
Trash2,
User,
} from "lucide-react";

interface TaskKanbanCardProps {
task: Task;

onEditTask: (task: Task) => void;

onDeleteTask: (task: Task) => void;
}

const priorityConfig = {
LOW: {
label: "Baixa",
className: "bg-green-100 text-green-700",
},

MEDIUM: {
label: "Média",
className: "bg-yellow-100 text-yellow-700",
},

HIGH: {
label: "Alta",
className: "bg-red-100 text-red-700",
},

CRITICAL: {
label: "Crítica",
className: "bg-purple-100 text-purple-700",
},
};

function formatDate(date: string | null) {
if (!date) {
return "Sem prazo";
}

return new Date(`${date}T00:00:00`).toLocaleDateString(
"pt-BR"
);
}

function TaskKanbanCard({
task,
onEditTask,
onDeleteTask,
}: TaskKanbanCardProps) {
const priority = task.priority
? priorityConfig[task.priority]
: {
label: "Não definida",
className: "bg-gray-100 text-gray-600",
};

return ( <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"> <div className="flex items-start justify-between gap-3"> <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
{task.title} </h3>


    <div className="flex shrink-0 items-center gap-1">
      <button
        type="button"
        onClick={() => onEditTask(task)}
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-blue-50 hover:text-blue-700"
        title="Editar Task"
        aria-label={`Editar ${task.title}`}
      >
        <Pencil size={16} />
      </button>

      <button
        type="button"
        onClick={() => onDeleteTask(task)}
        className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
        title="Excluir Task"
        aria-label={`Excluir ${task.title}`}
      >
        <Trash2 size={16} />
      </button>
    </div>
  </div>

  {task.description && (
    <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
      {task.description}
    </p>
  )}

  <div className="mt-4">
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${priority.className}`}>
      {priority.label}
    </span>
  </div>

  <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <FolderKanban size={14} />

      <span className="truncate">
        {task.projectName || "Sem projeto"}
      </span>
    </div>

    <div className="flex items-center gap-2 text-xs text-gray-500">
      <User size={14} />

      <span className="truncate">
        {task.responsibleName || "Sem responsável"}
      </span>
    </div>

    <div className="flex items-center gap-2 text-xs text-gray-500">
      <CalendarDays size={14} />

      <span>
        {formatDate(task.expectedFinalDate)}
      </span>
    </div>
  </div>
</article>


);
}

export default TaskKanbanCard;
