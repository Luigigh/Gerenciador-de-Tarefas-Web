import type {
    Task,
    TaskStatus,
    } from "../../types/Task";
    
    import TaskKanbanCard from "./TaskKanbanCard";
    
    export interface ColumnConfig {
    label: string;
    
    status: TaskStatus;
    
    headerClass: string;
    
    dotClass: string;
    
    bgClass: string;
    }
    
    export const COLUMN_CONFIGS: ColumnConfig[] = [
    {
    label: "Não iniciadas",
    status: "NOT_STARTED",
    headerClass: "text-gray-700",
    dotClass: "bg-gray-400",
    bgClass: "bg-gray-50",
    },
    
    {
    label: "Em progresso",
    status: "IN_PROGRESS",
    headerClass: "text-blue-700",
    dotClass: "bg-blue-500",
    bgClass: "bg-blue-50",
    },
    
    {
    label: "Em revisão",
    status: "REVIEW",
    headerClass: "text-yellow-700",
    dotClass: "bg-yellow-500",
    bgClass: "bg-yellow-50",
    },
    
    {
    label: "Concluídas",
    status: "COMPLETED",
    headerClass: "text-green-700",
    dotClass: "bg-green-500",
    bgClass: "bg-green-50",
    },
    ];
    
    interface TaskKanbanColumnProps {
    config: ColumnConfig;
    
    tasks: Task[];
    
    onEditTask: (task: Task) => void;
    
    onDeleteTask: (task: Task) => void;
    }
    
    function TaskKanbanColumn({
    config,
    tasks,
    onEditTask,
    onDeleteTask,
    }: TaskKanbanColumnProps) {
    return (
    <section className={`flex min-h-[500px] flex-col rounded-2xl border border-gray-200 ${config.bgClass}`}>
    
    
      {/* Cabeçalho da coluna */}
    
      <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-4">
    
        <span className={`h-2.5 w-2.5 rounded-full ${config.dotClass}`} />
    
        <h2 className={`flex-1 text-sm font-semibold ${config.headerClass}`}>
          {config.label}
        </h2>
    
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-200 bg-white px-2 text-xs font-medium text-gray-500">
          {tasks.length}
        </span>
    
      </div>
    
      {/* Lista de Tasks */}
    
      <div className="flex max-h-[calc(100vh-280px)] flex-1 flex-col gap-3 overflow-y-auto p-3">
    
        {tasks.length === 0 ? (
    
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
    
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
    
              <span className="text-lg text-gray-400">
                —
              </span>
    
            </div>
    
            <p className="mt-3 text-xs text-gray-400">
              Nenhuma Task nesta coluna
            </p>
    
          </div>
    
        ) : (
    
          tasks.map((task) => (
    
            <TaskKanbanCard
              key={task.idTask}
              task={task}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
    
          ))
    
        )}
    
      </div>
    
    </section>
    
    
    );
    }
    
    export default TaskKanbanColumn;
    