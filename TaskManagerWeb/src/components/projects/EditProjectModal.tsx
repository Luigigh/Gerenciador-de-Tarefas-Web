import { useEffect, useState } from "react";
import type { Project } from "../../types/Project";
import { updateProject } from "../../services/projectService";

interface EditProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  onProjectUpdated: () => void;
}

function EditProjectModal({
  isOpen,
  project,
  onClose,
  onProjectUpdated,
}: EditProjectModalProps) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [expectedFinalDate, setExpectedFinalDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);

  /*
   * Quando o projeto selecionado mudar,
   * preenchemos os campos do formulário.
   */
  useEffect(() => {

    if (!project) {
      return;
    }

    console.log(
      "[EDIT PROJECT MODAL] Carregando projeto:",
      project
    );

    setName(project.name);
    setDescription(project.description);
    setBudget(String(project.budget));
    setStartDate(project.startDate ?? "");
    setExpectedFinalDate(project.expectedFinalDate ?? "");
    setEndDate(project.endDate ?? "");
    setStatus(project.status);

  }, [project]);


  if (!isOpen || !project) {
    return null;
  }


  const handleSubmit = async (
    event: React.FormEvent
  ) => {
  
    event.preventDefault();
  
    if (!project) {
      console.error(
        "[EDIT PROJECT] Nenhum projeto selecionado"
      );
  
      return;
    }
  
    try {
  
      console.log(
        "[EDIT PROJECT] Atualizando projeto:",
        project.idProject
      );
  
      const projectData = {
        name,
        description,
        budget: Number(budget),
        startDate,
        expectedFinalDate,
        endDate: endDate || null,
        status,
      };
  
      await updateProject(
        project.idProject,
        projectData
      );
  
      console.log(
        "[EDIT PROJECT] Projeto atualizado com sucesso"
      );
  
      onProjectUpdated();
  
    } catch (error) {
  
      console.error(
        "[EDIT PROJECT] Erro ao atualizar projeto:",
        error
      );
  
    }
  
  };


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold text-gray-900">
              Editar projeto
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Atualize as informações do projeto
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-400 transition hover:text-gray-700"
          >
            ×
          </button>

        </div>


        {/* Formulário */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >

          {/* Nome */}

          <div>

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


          {/* Orçamento */}

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Orçamento
            </label>

            <input
              type="number"
              step="0.01"
              value={budget}
              onChange={(event) =>
                setBudget(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>


          {/* Descrição */}

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


          {/* Data inicial */}

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
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>


          {/* Data esperada */}

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data esperada de conclusão
            </label>

            <input
              type="date"
              value={expectedFinalDate}
              onChange={(event) =>
                setExpectedFinalDate(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>


          {/* Data final */}

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data de conclusão
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(event) =>
                setEndDate(event.target.value)
              }
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />

          </div>


          {/* Status */}

          <div>

            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
              required
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-green-600"
            >

              <option value="NOT_STARTED">
                Não iniciado
              </option>

              <option value="IN_PROGRESS">
                Em progresso
              </option>

              <option value="REVIEW">
                Em revisão
              </option>

              <option value="COMPLETED">
                Terminado
              </option>

            </select>

          </div>


          {/* Botões */}

          <div className="mt-4 flex justify-end gap-3 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
            >
              Cancelar
            </button>


            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {loading
                ? "Salvando..."
                : "Salvar alterações"
              }

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default EditProjectModal;