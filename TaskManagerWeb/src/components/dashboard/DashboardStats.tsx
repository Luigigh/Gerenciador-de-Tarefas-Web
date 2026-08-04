import {
    FolderKanban,
    ListTodo,
    Clock,
    CheckCircle2,
  } from "lucide-react";
  
  import type {
    Task,
  } from "../../types/Task";
  
  import type {
    Project,
  } from "../../types/Project";
  
  
  interface DashboardStatsProps {
  
    tasks: Task[];
  
    projects: Project[];
  
  }
  
  
  interface StatCardProps {
  
    label: string;
  
    value: number;
  
    icon: React.ReactNode;
  
    iconBg: string;
  
    iconColor: string;
  
    accent: string;
  
  }
  
  
  function StatCard({
  
    label,
    value,
    icon,
    iconBg,
    iconColor,
    accent,
  
  }: StatCardProps) {
  
    return (
  
      <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
  
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
        >
  
          <span className={iconColor}>
  
            {icon}
  
          </span>
  
        </div>
  
  
        <div className="min-w-0">
  
          <p className="text-sm font-medium leading-tight text-gray-500">
  
            {label}
  
          </p>
  
  
          <p
            className={`mt-0.5 text-3xl font-bold ${accent}`}
          >
  
            {value}
  
          </p>
  
        </div>
  
      </div>
  
    );
  
  }
  
  
  function DashboardStats({
  
    tasks,
    projects,
  
  }: DashboardStatsProps) {
  
  
    const activeProjects = projects.filter(
  
      (project) =>
  
        project.status === "IN_PROGRESS"
  
        ||
  
        project.status === "REVIEW"
  
    ).length;
  
  
    const totalTasks = tasks.length;
  
  
    const tasksInProgress = tasks.filter(
  
      (task) =>
  
        task.status === "IN_PROGRESS"
  
    ).length;
  
  
    const completedTasks = tasks.filter(
  
      (task) =>
  
        task.status === "COMPLETED"
  
    ).length;
  
  
    const stats: StatCardProps[] = [
  
      {
  
        label: "Projetos ativos",
  
        value: activeProjects,
  
        icon: <FolderKanban size={22} />,
  
        iconBg: "bg-green-50",
  
        iconColor: "text-green-600",
  
        accent: "text-green-700",
  
      },
  
      {
  
        label: "Total de tarefas",
  
        value: totalTasks,
  
        icon: <ListTodo size={22} />,
  
        iconBg: "bg-slate-100",
  
        iconColor: "text-slate-600",
  
        accent: "text-slate-800",
  
      },
  
      {
  
        label: "Tarefas em progresso",
  
        value: tasksInProgress,
  
        icon: <Clock size={22} />,
  
        iconBg: "bg-amber-50",
  
        iconColor: "text-amber-600",
  
        accent: "text-amber-700",
  
      },
  
      {
  
        label: "Tarefas concluídas",
  
        value: completedTasks,
  
        icon: <CheckCircle2 size={22} />,
  
        iconBg: "bg-emerald-50",
  
        iconColor: "text-emerald-600",
  
        accent: "text-emerald-700",
  
      },
  
    ];
  
  
    return (
  
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
  
        {stats.map(
  
          (stat) => (
  
            <StatCard
  
              key={stat.label}
  
              {...stat}
  
            />
  
          )
  
        )}
  
      </div>
  
    );
  
  }
  
  
  export default DashboardStats;