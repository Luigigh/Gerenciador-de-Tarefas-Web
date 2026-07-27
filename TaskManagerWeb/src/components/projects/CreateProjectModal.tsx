import { useState } from "react";
import {
  createProject,
  type CreateProjectData,
} from "../../services/projectService";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated: () => void;
}

function CreateProjectModal({
  isOpen,
  onClose,
  onProjectCreated,
}: CreateProjectModalProps) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expectedFinalDate, setExpectedFinalDate] = useState("");
  const [status, setStatus] = useState("NOT_STARTED");

  const [loading, setLoading] = useState(false);

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(
    event: React.FormEvent
  ) {

    event.preventDefault();

    try {

      setLoading(true);

      const projectData: CreateProjectData = {
        name,
        description,
        budget: Number(budget),
        startDate,
        expectedFinalDate,
        endDate: null,
        status,
      };

      console.log(
        "[CREATE PROJECT] Enviando:",
        projectData
      );

      await createProject(projectData);

      console.log(
        "[CREATE PROJECT] Projeto criado com sucesso"
      );

      setName("");
      setDescription("");
      setBudget("");
      setStartDate("");
      setExpectedFinalDate("");
      setStatus("NOT_STARTED");

      onProjectCreated();

    } catch (error) {

      console.error(
        "[CREATE PROJECT] Erro ao criar projeto:",
        error
      );

      alert("Erro ao criar projeto.");

    } finally {

      setLoading(false);

    }

  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Novo projeto
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Cadastre um novo projeto no sistema
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 transition hover:text-gray-700"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >

          <div className="md:col-span-2">

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Nome do projeto
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div className="md:col-span-2">

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Descrição
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              required
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Orçamento
            </label>

            <input
              type="number"
              step="0.01"
              min="0"
              value={budget}
              onChange={(event) =>
                setBudget(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-600"
            >

              <option value="NOT_STARTED">
                Não iniciado
              </option>

              <option value="IN_PROGRESS">
                Em Progresso
              </option>

              <option value="REVIEW">
                Em Revisão
              </option>

              <option value="COMPLETED">
                Terminado
              </option>

            </select>

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data de início
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(event) =>
                setStartDate(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Previsão de conclusão
            </label>

            <input
              type="date"
              value={expectedFinalDate}
              onChange={(event) =>
                setExpectedFinalDate(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>

          <div className="mt-4 flex justify-end gap-3 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Criando..."
                : "Criar projeto"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateProjectModal;