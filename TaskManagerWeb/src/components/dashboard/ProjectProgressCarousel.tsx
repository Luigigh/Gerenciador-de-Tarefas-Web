import type {
    Project,
  } from "../../types/Project";
  
  import type {
    Task,
  } from "../../types/Task";
  
  
  interface ProjectProgressCarouselProps {
  
    projects: Project[];
  
    tasks: Task[];
  
  }
  
  
  interface ProjectStats {
  
    project: Project;
  
    total: number;
  
    completed: number;
  
    percentage: number;
  
  }
  
  
  function computeStats(
    projects: Project[],
    tasks: Task[]
  ): ProjectStats[] {
  
    return projects.map(
      (project) => {
  
        const projectTasks = tasks.filter(
          (task) =>
            task.projectId === project.idProject
        );
  
  
        const total = projectTasks.length;
  
  
        const completed = projectTasks.filter(
          (task) =>
            task.status === "COMPLETED"
        ).length;
  
  
        const percentage =
          total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
              );
  
  
        return {
          project,
          total,
          completed,
          percentage,
        };
  
      }
    );
  
  }
  
  
  function ProjectProgressCarousel({
  
    projects,
  
    tasks,
  
  }: ProjectProgressCarouselProps) {
  
  
    const projectStats = computeStats(
      projects,
      tasks
    );
  
  
    return (
  
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  
        <h2 className="text-lg font-semibold text-gray-900">
  
          Progresso dos projetos
  
        </h2>
  
  
        {projectStats.length === 0 ? (
  
          <p className="mt-4 text-sm text-gray-500">
  
            Nenhum projeto encontrado.
  
          </p>
  
        ) : (
  
          projectStats.map(
            (item) => (
  
              <div
                key={item.project.idProject}
                className="mt-5"
              >
  
                <div className="mb-2 flex items-center justify-between">
  
                  <span className="font-medium text-gray-700">
  
                    {item.project.name}
  
                  </span>
  
  
                  <span className="font-semibold text-green-700">
  
                    {item.percentage}%
  
                  </span>
  
                </div>
  
  
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
  
                  <div
                    className="h-full rounded-full bg-green-600 transition-all"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
  
                </div>
  
  
                <p className="mt-2 text-xs text-gray-500">
  
                  {item.completed} de {item.total} tarefas concluídas
  
                </p>
  
              </div>
  
            )
          )
  
        )}
  
      </div>
  
    );
  
  }
  
  
  export default ProjectProgressCarousel;