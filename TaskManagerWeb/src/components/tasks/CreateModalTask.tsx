import { useState } from "react";

import type { Project } from "../../types/Project";
import type { User } from "../../types/User";

import {
createTask,
type TaskData,
} from "../../services/taskService";

interface CreateTaskModalProps {
isOpen: boolean;
projects: Project[];
users: User[];
onClose: () => void;
onTaskCreated: () => void;
}

function CreateTaskModal({
isOpen,
projects,
users,
onClose,
onTaskCreated,
}: CreateTaskModalProps) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [comment, setComment] = useState("");
const [startDate, setStartDate] = useState("");
const [expectedFinalDate, setExpectedFinalDate] = useState("");
const [endDate, setEndDate] = useState("");

const [status, setStatus] = useState("NOT_STARTED");
const [priority, setPriority] = useState("MEDIUM");

const [projectId, setProjectId] = useState("");
const [responsibleId, setResponsibleId] = useState("");

const [loading, setLoading] = useState(false);

if (!isOpen) {
return null;
}

async function handleSubmit(event: React.FormEvent) {
event.preventDefault();


try {
  setLoading(true);

  const taskData: TaskData = {
    title,
    description,
    comment,
    startDate,
    expectedFinalDate,
    endDate: endDate === "" ? null : endDate,
    status,
    priority,
    projectId: Number(projectId),
    responsibleId: Number(responsibleId),
  };

  console.log(
    "[CREATE TASK] Dados:",
    taskData
  );

  await createTask(taskData);

  console.log(
    "[CREATE TASK] Task criada"
  );

  onTaskCreated();

  resetForm();

} catch (error) {
  console.error(
    "[CREATE TASK] Erro:",
    error
  );

  alert(
    "Não foi possível criar a Task."
  );

} finally {
  setLoading(false);
}


}

function resetForm() {
    setTitle("");
    setDescription("");
    setComment("");


    setStartDate("");
    setExpectedFinalDate("");
    setEndDate("");

    setStatus("NOT_STARTED");
    setPriority("MEDIUM");

    setProjectId("");
    setResponsibleId("");


}

function handleClose() {
    resetForm();
    onClose();
}

return ( <div className="
   fixed inset-0 z-50
   flex items-center justify-center
   bg-black/40 p-4
 "> <div className="
     max-h-[90vh] w-full max-w-4xl
     overflow-y-auto
     rounded-2xl bg-white
     p-6 shadow-xl
   ">


    {/* Cabeçalho */}

    <div className="
      mb-6 flex
      items-start justify-between
    ">
      <div>
        <h2 className="
          text-xl font-semibold
          text-gray-900
        ">
          Nova Task
        </h2>

        <p className="
          mt-1 text-sm
          text-gray-500
        ">
          Crie uma nova tarefa para um projeto
        </p>
      </div>

      <button
        type="button"
        onClick={handleClose}
        className="
          text-2xl text-gray-400
          transition
          hover:text-gray-700
        "
      >
        ×
      </button>
    </div>

    <form
      onSubmit={handleSubmit}
      className="
        grid grid-cols-1
        gap-4 md:grid-cols-2
      "
    >

      {/* Título */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Título
        </label>

        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          required
          className="
            w-full rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Projeto */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Projeto
        </label>

        <select
          value={projectId}
          onChange={(event) =>
            setProjectId(event.target.value)
          }
          required
          className="
            w-full rounded-xl
            border border-gray-200
            bg-white px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        >
          <option value="">
            Selecione um projeto
          </option>

          {projects.map((project) => (
            <option
              key={project.idProject}
              value={project.idProject}
            >
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {/* Descrição */}

      <div className="md:col-span-2">
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Descrição
        </label>

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          required
          rows={3}
          className="
            w-full resize-none
            rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Responsável */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Responsável
        </label>

        <select
          value={responsibleId}
          onChange={(event) =>
            setResponsibleId(event.target.value)
          }
          required
          className="
            w-full rounded-xl
            border border-gray-200
            bg-white px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        >
          <option value="">
            Selecione um usuário
          </option>

          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.firstname} {user.lastName}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Status
        </label>

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
          className="
            w-full rounded-xl
            border border-gray-200
            bg-white px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        >
          <option value="NOT_STARTED">
            Não iniciada
          </option>

          <option value="IN_PROGRESS">
            Em progresso
          </option>

          <option value="REVIEW">
            Em revisão
          </option>

          <option value="COMPLETED">
            Concluída
          </option>
        </select>
      </div>

      {/* Prioridade */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Prioridade
        </label>

        <select
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value)
          }
          className=" w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-600"
        >
          <option value="LOW">
            Baixa
          </option>

          <option value="MEDIUM">
            Média
          </option>

          <option value="HIGH">
            Alta
          </option>

          <option value="CRITICAL">
            Crítica
          </option>
        </select>
      </div>

      {/* Data de início */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Data de início
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(event) =>
            setStartDate(event.target.value)
          }
          required
          className="
            w-full rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Prazo esperado */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Prazo esperado
        </label>

        <input
          type="date"
          value={expectedFinalDate}
          onChange={(event) =>
            setExpectedFinalDate(event.target.value)
          }
          required
          className="
            w-full rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Data de conclusão */}

      <div>
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Data de conclusão
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(event) =>
            setEndDate(event.target.value)
          }
          className="
            w-full rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Comentário */}

      <div className="md:col-span-2">
        <label className="
          mb-1 block
          text-sm font-medium
          text-gray-700
        ">
          Comentário
        </label>

        <textarea
          value={comment}
          onChange={(event) =>
            setComment(event.target.value)
          }
          rows={3}
          className="
            w-full resize-none
            rounded-xl
            border border-gray-200
            px-4 py-3
            outline-none transition
            focus:border-green-600
          "
        />
      </div>

      {/* Botões */}

      <div className="
        mt-4 flex
        justify-end gap-3
        md:col-span-2
      ">
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="
            rounded-xl
            border border-gray-200
            px-5 py-3
            text-sm font-medium
            text-gray-600
            transition
            hover:bg-gray-50
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="
            rounded-xl
            bg-green-700
            px-5 py-3
            text-sm font-medium
            text-white
            transition
            hover:bg-green-800
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading
            ? "Criando..."
            : "Criar Task"}
        </button>
      </div>

    </form>
  </div>
</div>


);
}

export default CreateTaskModal;
