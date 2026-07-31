import { useMemo, useState } from "react";

import {
ClipboardList,
Plus,
} from "lucide-react";

import type {
Task,
TaskFiltersState,
TaskStatus,
} from "../../types/Task";

import type {
Project,
} from "../../types/Project";

import type {
User,
} from "../../types/User";

import TaskFilters from "./TaskKanbanFilters";

import TaskKanbanColumn, {
COLUMN_CONFIGS,
} from "./TaskKanbanColumn";

interface TaskKanbanBoardProps {
tasks: Task[];

projects: Project[];

users: User[];

onCreateTask: () => void;

onEditTask: (
task: Task
) => void;

onDeleteTask: (
task: Task
) => void;
}

const initialFilters: TaskFiltersState = {
search: "",
projectId: "",
responsibleId: "",
priority: "",
};

function TaskKanbanBoard({
tasks,
projects,
users,
onCreateTask,
onEditTask,
onDeleteTask,
}: TaskKanbanBoardProps) {

const [
filters,
setFilters,
] = useState<TaskFiltersState>(
initialFilters
);

const filteredTasks = useMemo(() => {


const normalizedSearch =
  filters.search
    .trim()
    .toLowerCase();

return tasks.filter(
  (task) => {

    const matchesSearch =
      normalizedSearch === "" ||
      task.title
        .toLowerCase()
        .includes(
          normalizedSearch
        ) ||
      task.description
        ?.toLowerCase()
        .includes(
          normalizedSearch
        ) ||
      task.projectName
        ?.toLowerCase()
        .includes(
          normalizedSearch
        ) ||
      task.responsibleName
        ?.toLowerCase()
        .includes(
          normalizedSearch
        );

    const matchesProject =
      filters.projectId === "" ||
      String(
        task.projectId
      ) === filters.projectId;

    const matchesResponsible =
      filters.responsibleId === "" ||
      String(
        task.responsibleId
      ) === filters.responsibleId;

    const matchesPriority =
      filters.priority === "" ||
      task.priority ===
        filters.priority;

    return (
      matchesSearch &&
      matchesProject &&
      matchesResponsible &&
      matchesPriority
    );

  }
);


}, [
tasks,
filters,
]);

function getTasksByStatus(
status: TaskStatus
) {


return filteredTasks.filter(
  (task) =>
    task.status === status
);


}

return (


<div className="space-y-6">

  {/* Cabeçalho */}

  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">

          <ClipboardList
            size={22}
          />

        </div>

        <div>

          <h1 className="text-2xl font-bold text-gray-900">

            Gerenciamento de Tasks

          </h1>

          <p className="mt-1 text-sm text-gray-500">

            Organize e acompanhe as tarefas dos seus projetos.

          </p>

        </div>

      </div>

    </div>

    <button
      type="button"
      onClick={onCreateTask}
      className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800"
    >

      <Plus
        size={18}
      />

      Nova Task

    </button>

  </div>

  {/* Filtros */}

  <TaskFilters
    filters={filters}
    projects={projects}
    users={users}
    onFiltersChange={setFilters}
  />

  {/* Informações */}

  <div className="flex items-center justify-between">

    <p className="text-sm text-gray-500">

      {filteredTasks.length === 1
        ? "1 Task encontrada"
        : `${filteredTasks.length} Tasks encontradas`
      }

    </p>

    {filteredTasks.length !==
      tasks.length && (

      <p className="text-xs text-gray-400">

        Filtradas de {tasks.length}

      </p>

    )}

  </div>

  {/* Quadro Kanban */}

  <div className="grid gap-5 xl:grid-cols-4">

    {COLUMN_CONFIGS.map(
      (config) => (

        <TaskKanbanColumn
          key={config.status}
          config={config}
          tasks={
            getTasksByStatus(
              config.status
            )
          }
          onEditTask={
            onEditTask
          }
          onDeleteTask={
            onDeleteTask
          }
        />

      )
    )}

  </div>

</div>


);

}

export default TaskKanbanBoard;
