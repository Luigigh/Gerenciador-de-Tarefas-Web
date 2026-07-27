import type { Project } from "../../types/Project";

interface ProjectTableProps {
  projects: Project[];
  onCreateProject: () => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (id: number) => void;
}

function ProjectTable({
  projects,
  onCreateProject,
  onEditProject,
  onDeleteProject,
}: ProjectTableProps) {

  function getStatusLabel(status: string) {
    const statusMap: Record<string, string> = {
      NOT_STARTED: "Não iniciado",
      STARTED: "Iniciado",
      IN_PROGRESS: "Em andamento",
      COMPLETED: "Concluído",
      REVIEW: "Em revisão",
      DONE: "Finalizado",
    };

    return statusMap[status] ?? status;
  }

  function getStatusStyle(status: string) {
    const styleMap: Record<string, string> = {
      NOT_STARTED: "bg-gray-100 text-gray-700",
      STARTED: "bg-blue-100 text-blue-700",
      IN_PROGRESS: "bg-yellow-100 text-yellow-700",
      COMPLETED: "bg-green-100 text-green-700",
      REVIEW: "bg-purple-100 text-purple-700",
      DONE: "bg-emerald-100 text-emerald-700",
    };

    return styleMap[status] ?? "bg-gray-100 text-gray-700";
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Projetos
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Lista de projetos cadastrados no sistema
          </p>
        </div>

        <button
          onClick={onCreateProject}
          className="rounded-xl bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
        >
          + Novo projeto
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-gray-50">

            <tr className="text-xs uppercase tracking-wide text-gray-500">

              <th className="px-6 py-4">
                Projeto
              </th>

              <th className="px-6 py-4">
                Orçamento
              </th>

              <th className="px-6 py-4">
                Início
              </th>

              <th className="px-6 py-4">
                Previsão
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  Nenhum projeto encontrado.
                </td>

              </tr>

            ) : (

              projects.map((project) => (

                <tr
                  key={project.idProject}
                  className="border-t border-gray-100 transition hover:bg-gray-50"
                >

                  <td className="px-6 py-4">

                    <div>

                      <p className="font-medium text-gray-900">
                        {project.name}
                      </p>

                      <p className="max-w-xs truncate text-xs text-gray-500">
                        {project.description}
                      </p>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {project.budget.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {project.startDate}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {project.expectedFinalDate}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                        project.status
                      )}`}
                    >
                      {getStatusLabel(project.status)}
                    </span>

                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-3">

                    <button
                      onClick={() => onEditProject(project)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Editar
                    </button>

                      <button
                        onClick={() => onDeleteProject(project.idProject)}
                        className="text-sm font-medium text-gray-500 transition hover:text-red-600"
                      >
                        Excluir
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

export default ProjectTable;