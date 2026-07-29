import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import TaskTable from "../../components/tasks/TaskTable";
import CreateTaskModal from "../../components/tasks/CreateModalTask";
import EditTaskModal from "../../components/tasks/EditTaskModal";

import {
deleteTask,
getTasks,
} from "../../services/taskService";

import { getProjects } from "../../services/projectService";
import { getUsers } from "../../services/userService";

import type { Task } from "../../types/Task";
import type { Project } from "../../types/Project";
import type { User } from "../../types/User";

function Tasks() {
const [tasks, setTasks] = useState<Task[]>([]);
const [projects, setProjects] = useState<Project[]>([]);
const [users, setUsers] = useState<User[]>([]);

const [loading, setLoading] = useState(true);

const [
isCreateTaskModalOpen,
setIsCreateTaskModalOpen,
] = useState(false);

const [selectedTask, setSelectedTask] = useState<Task | null>(null);

const [
isEditTaskModalOpen,
setIsEditTaskModalOpen,
] = useState(false);

async function loadTasks() {
try {
console.log("[TASKS] Buscando Tasks");


  const data = await getTasks();

  console.log(
    "[TASKS] Tasks recebidas:",
    data
  );

  setTasks(data);

} catch (error) {
  console.error(
    "[TASKS] Erro ao carregar Tasks:",
    error
  );
}


}

async function loadProjects() {
try {
console.log("[TASKS] Buscando Projects");


  const data = await getProjects();

  console.log(
    "[TASKS] Projects recebidos:",
    data
  );

  setProjects(data);

} catch (error) {
  console.error(
    "[TASKS] Erro ao carregar Projects:",
    error
  );
}


}

async function loadUsers() {
try {
console.log("[TASKS] Buscando Users");


  const data = await getUsers();

  console.log(
    "[TASKS] Users recebidos:",
    data
  );

  setUsers(data);

} catch (error) {
  console.error(
    "[TASKS] Erro ao carregar Users:",
    error
  );
}


}

async function loadPageData() {
try {
setLoading(true);


  await Promise.all([
    loadTasks(),
    loadProjects(),
    loadUsers(),
  ]);

} finally {
  setLoading(false);
}


}

useEffect(() => {
loadPageData();
}, []);

async function handleDeleteTask(task: Task) {
const confirmed = window.confirm(
`Deseja realmente excluir a Task "${task.title}"?`
);


if (!confirmed) {
  console.log(
    "[TASKS] Exclusão cancelada"
  );

  return;
}

try {
  console.log(
    "[TASKS] Excluindo Task:",
    task.idTask
  );

  await deleteTask(task.idTask);

  console.log(
    "[TASKS] Task excluída. Atualizando tabela..."
  );

  await loadTasks();

} catch (error) {
  console.error(
    "[TASKS] Erro ao excluir Task:",
    error
  );

  alert(
    "Não foi possível excluir a Task."
  );
}


}

function handleEditTask(task: Task) {
console.log(
"[TASKS] Abrindo edição:",
task
);


setSelectedTask(task);

setIsEditTaskModalOpen(true);


}

return ( <MainLayout>


  <div className="space-y-8">

    {/* Cabeçalho */}

    <div>

      <h1 className="text-3xl font-bold text-gray-900">
        Gerenciamento de Tasks
      </h1>

      <p className="mt-2 text-gray-500">
        Crie, acompanhe e organize as tarefas
        dos seus projetos.
      </p>

    </div>

    {/* Conteúdo */}

    {loading ? (

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

        <p className="text-gray-500">
          Carregando Tasks...
        </p>

      </div>

    ) : (

      <TaskTable
        tasks={tasks}
        onCreateTask={() =>
          setIsCreateTaskModalOpen(true)
        }
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

    )}

    {/* Modal de criação */}

    <CreateTaskModal
      isOpen={isCreateTaskModalOpen}
      projects={projects}
      users={users}
      onClose={() =>
        setIsCreateTaskModalOpen(false)
      }
      onTaskCreated={() => {
        setIsCreateTaskModalOpen(false);
        loadTasks();
      }}
    />

    {/* Modal de edição */}

    <EditTaskModal
      isOpen={isEditTaskModalOpen}
      task={selectedTask}
      projects={projects}
      users={users}
      onClose={() => {
        setIsEditTaskModalOpen(false);
        setSelectedTask(null);
      }}
      onTaskUpdated={() => {
        setIsEditTaskModalOpen(false);
        setSelectedTask(null);
        loadTasks();
      }}
    />

  </div>

</MainLayout>


);
}

export default Tasks;
