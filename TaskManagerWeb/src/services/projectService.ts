import api from "../api/axios";
import type { Project } from "../types/Project";

export interface CreateProjectData {
  name: string;
  description: string;
  budget: number;
  startDate: string;
  expectedFinalDate: string;
  endDate?: string | null;
  status: string;
}

export interface UpdateProjectData {
  name: string;
  description: string;
  budget: number;
  startDate: string;
  expectedFinalDate: string;
  endDate?: string | null;
  status: string;
}

export async function getProjects(): Promise<Project[]> {
  console.log("[PROJECT SERVICE] Buscando projetos");

  const response = await api.get<Project[]>("/projects");

  console.log(
    "[PROJECT SERVICE] Projetos recebidos:",
    response.data
  );

  return response.data;
}

export async function getProjectById(
  id: number
): Promise<Project> {
  console.log(
    "[PROJECT SERVICE] Buscando projeto:",
    id
  );

  const response = await api.get<Project>(
    `/projects/${id}`
  );

  return response.data;
}

export async function createProject(
  projectData: CreateProjectData
): Promise<Project> {
  console.log(
    "[PROJECT SERVICE] Criando projeto:",
    projectData
  );

  const response = await api.post<Project>(
    "/projects",
    projectData
  );

  console.log(
    "[PROJECT SERVICE] Projeto criado:",
    response.data
  );

  return response.data;
}

export async function updateProject(
  id: number,
  projectData: {
    name: string;
    description: string;
    budget: number;
    startDate: string | null;
    expectedFinalDate: string | null;
    endDate: string | null;
    status: string;
  }
) {

  console.log(
    "[PROJECT SERVICE] Atualizando projeto:",
    id
  );

  const response = await api.put(
    `/projects/${id}`,
    projectData
  );

  console.log(
    "[PROJECT SERVICE] Projeto atualizado:",
    response.data
  );

  return response.data;
}

export async function deleteProject(
  id: number
): Promise<void> {
  console.log(
    "[PROJECT SERVICE] Excluindo projeto:",
    id
  );

  await api.delete(`/projects/${id}`);

  console.log(
    "[PROJECT SERVICE] Projeto excluído"
  );
}