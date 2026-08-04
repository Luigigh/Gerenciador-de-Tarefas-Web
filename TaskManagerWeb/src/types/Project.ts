export type ProjectStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "REVIEW"
  | "COMPLETED";

export interface Project {
  idProject: number;

  name: string;

  description: string;

  budget: number;

  startDate: string;

  expectedFinalDate: string;

  endDate: string | null;

  status: ProjectStatus;

  createdAt: string;
}