import type { Task } from "../../types/Task";

import {
Pencil,
Plus,
Trash2,
} from "lucide-react";

interface TaskTableProps {
tasks: Task[];
onCreateTask: () => void;
onEditTask: (task: Task) => void;
onDeleteTask: (task: Task) => void;
}

function TaskTable({
tasks,
onCreateTask,
onEditTask,
onDeleteTask,
}: TaskTableProps) {

function getStatusStyle(status: string) {
switch (status) {
case "NOT_STARTED":
return "bg-gray-100 text-gray-700";


  case "IN_PROGRESS":
    return "bg-blue-100 text-blue-700";

  case "REVIEW":
    return "bg-yellow-100 text-yellow-700";

  case "COMPLETED":
    return "bg-green-100 text-green-700";

  default:
    return "bg-gray-100 text-gray-700";
}


}

function formatStatus(status: string) {
switch (status) {
case "NOT_STARTED":
return "Não iniciada";


  case "IN_PROGRESS":
    return "Em progresso";

  case "REVIEW":
    return "Em revisão";

  case "COMPLETED":
    return "Concluída";

  default:
    return status;
}


}

function getPriorityStyle(priority: string) {
switch (priority) {
case "HIGH":
return "bg-red-100 text-red-700";


  case "MEDIUM":
    return "bg-yellow-100 text-yellow-700";

  case "LOW":
    return "bg-green-100 text-green-700";

  case "CRITICAL":
    return "bg-purple-100 text-purple-700";

  default:
    return "bg-gray-100 text-gray-700";
}


}

function formatPriority(priority: string) {
switch (priority) {
case "HIGH":
return "Alta";


  case "MEDIUM":
    return "Média";

  case "LOW":
    return "Baixa";

  case "CRITICAL":
    return "Crítica";

  default:
    return priority;
}


}

return ( <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">


  {/* Cabeçalho */}

  <div className="flex flex-col gap-4 border-b border-gray-100 p-6 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Tarefas
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Gerencie as tarefas dos projetos
      </p>
    </div>

    <button
      type="button"
      onClick={onCreateTask}
      className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
    >
      <Plus size={18} />

      Nova Task
    </button>

  </div>

  {/* Tabela */}

  <div className="overflow-x-auto">

    <table className="w-full text-left">

      <thead className="bg-gray-50">

        <tr className="text-xs uppercase tracking-wide text-gray-500">

          <th className="px-6 py-4">
            Task
          </th>

          <th className="px-6 py-4">
            Projeto
          </th>

          <th className="px-6 py-4">
            Responsável
          </th>

          <th className="px-6 py-4">
            Prioridade
          </th>

          <th className="px-6 py-4">
            Status
          </th>

          <th className="px-6 py-4">
            Prazo
          </th>

          <th className="px-6 py-4">
            Ações
          </th>

        </tr>

      </thead>

      <tbody>

        {tasks.length === 0 ? (

          <tr>

            <td
              colSpan={7}
              className="px-6 py-12 text-center text-sm text-gray-500"
            >
              Nenhuma Task cadastrada.
            </td>

          </tr>

        ) : (

          tasks.map((task) => (

            <tr
              key={task.idTask}
              className="border-t border-gray-100 transition hover:bg-gray-50"
            >

              {/* Task */}

              <td className="px-6 py-4">

                <p className="font-medium text-gray-900">
                  {task.title}
                </p>

                <p className="mt-1 max-w-xs truncate text-xs text-gray-500">
                  {task.description}
                </p>

              </td>

              {/* Projeto */}

              <td className="px-6 py-4 text-sm text-gray-600">
                {task.projectName}
              </td>

              {/* Responsável */}

              <td className="px-6 py-4 text-sm text-gray-600">
                {task.responsibleName}
              </td>

              {/* Prioridade */}

              <td className="px-6 py-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getPriorityStyle(task.priority)}`}
                >
                  {formatPriority(task.priority)}
                </span>

              </td>

              {/* Status */}

              <td className="px-6 py-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(task.status)}`}
                >
                  {formatStatus(task.status)}
                </span>

              </td>

              {/* Prazo */}

              <td className="px-6 py-4 text-sm text-gray-600">
                {task.expectedFinalDate}
              </td>

              {/* Ações */}

              <td className="px-6 py-4">

                <div className="flex items-center gap-3">

                  <button
                    type="button"
                    onClick={() => onEditTask(task)}
                    className="text-gray-500 transition hover:text-blue-700"
                    title="Editar Task"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeleteTask(task)}
                    className="text-gray-500 transition hover:text-red-600"
                    title="Excluir Task"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  </div>

</div>


);
}

export default TaskTable;
