export type TaskStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "REVIEW"
  | "COMPLETED";

export type TaskPriority =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL";

export interface Task {
  idTask: number;

  title: string;

  description: string;

  comment: string | null;

  createdAt: string;

  startDate: string;

  expectedFinalDate: string;

  endDate: string | null;

  status: TaskStatus;

  priority: TaskPriority | null;

  projectId: number;

  projectName: string;

  responsibleId: number;

  responsibleName: string;
}

export interface TaskFiltersState {
  search: string;

  projectId: string;

  responsibleId: string;

  priority: string;
}