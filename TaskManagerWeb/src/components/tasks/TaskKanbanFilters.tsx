import {
    Search,
    SlidersHorizontal,
    X,
    } from "lucide-react";
    
    import type { Project } from "../../types/Project";
    import type { User } from "../../types/User";
    import type { TaskFiltersState } from "../../types/Task";
    
    interface TaskFiltersProps {
    filters: TaskFiltersState;
    
    projects: Project[];
    
    users: User[];
    
    onFiltersChange: (
    filters: TaskFiltersState
    ) => void;
    }
    
    const initialFilters: TaskFiltersState = {
    search: "",
    projectId: "",
    responsibleId: "",
    priority: "",
    };
    
    function TaskFilters({
    filters,
    projects,
    users,
    onFiltersChange,
    }: TaskFiltersProps) {
    
    function updateFilter(
    field: keyof TaskFiltersState,
    value: string
    ) {
    onFiltersChange({
    ...filters,
    [field]: value,
    });
    }
    
    function clearFilters() {
    onFiltersChange(initialFilters);
    }
    
    const hasActiveFilters =
    filters.search !== "" ||
    filters.projectId !== "" ||
    filters.responsibleId !== "" ||
    filters.priority !== "";
    
    return ( <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
    
    
      <div className="mb-4 flex items-center gap-2">
    
        <SlidersHorizontal
          size={18}
          className="text-gray-500"
        />
    
        <h2 className="text-sm font-semibold text-gray-900">
          Filtros
        </h2>
    
        {hasActiveFilters && (
    
          <button
            type="button"
            onClick={clearFilters}
            className="ml-auto flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
    
            <X size={14} />
    
            Limpar filtros
    
          </button>
    
        )}
    
      </div>
    
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
    
        {/* Busca */}
    
        <div className="relative">
    
          <Search
            size={17}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
    
          <input
            type="text"
            value={filters.search}
            onChange={(event) =>
              updateFilter(
                "search",
                event.target.value
              )
            }
            placeholder="Buscar Task..."
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
    
        </div>
    
        {/* Projeto */}
    
        <select
          value={filters.projectId}
          onChange={(event) =>
            updateFilter(
              "projectId",
              event.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        >
    
          <option value="">
            Todos os projetos
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
    
        {/* Responsável */}
    
        <select
          value={filters.responsibleId}
          onChange={(event) =>
            updateFilter(
              "responsibleId",
              event.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        >
    
          <option value="">
            Todos os responsáveis
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
    
        {/* Prioridade */}
    
        <select
          value={filters.priority}
          onChange={(event) =>
            updateFilter(
              "priority",
              event.target.value
            )
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        >
    
          <option value="">
            Todas as prioridades
          </option>
    
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
    
    </div>
    
    
    );
    }
    
    export default TaskFilters;
    