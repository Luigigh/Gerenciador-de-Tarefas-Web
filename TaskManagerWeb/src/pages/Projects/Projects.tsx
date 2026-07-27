import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import ProjectTable from "../../components/projects/ProjectTable";
import CreateProjectModal from "../../components/projects/CreateProjectModal";
import EditProjectModal from "../../components/projects/EditProjectModal";
import { getProjects, deleteProject } from "../../services/projectService";


import type { Project } from "../../types/Project";


function Projects() {

  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(true);

  const [
    isCreateProjectModalOpen,
    setIsCreateProjectModalOpen
  ] = useState(false);

  const [
    isEditProjectModalOpen,
    setIsEditProjectModalOpen
  ] = useState(false);

  const [
    selectedProject,
    setSelectedProject
  ] = useState<Project | null>(null);


  async function loadProjects() {

    try {

      console.log(
        "[PROJECTS PAGE] Buscando projetos"
      );

      const data = await getProjects();

      console.log(
        "[PROJECTS PAGE] Projetos recebidos:",
        data
      );

      setProjects(data);

    } catch (error) {

      console.error(
        "[PROJECTS PAGE] Erro ao buscar projetos:",
        error
      );

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    loadProjects();

  }, []);


  function handleEditProject(project: Project) {

    console.log(
      "[PROJECTS PAGE] Projeto selecionado para edição:",
      project
    );

    setSelectedProject(project);

    setIsEditProjectModalOpen(true);

  }

  async function handleDeleteProject(id: number) {

    try {
  
      console.log(
        "[PROJECTS PAGE] Excluindo projeto:",
        id
      );
  
      await deleteProject(id);
  
      console.log(
        "[PROJECTS PAGE] Projeto excluído com sucesso"
      );
  
      loadProjects();
  
    } catch (error) {
  
      console.error(
        "[PROJECTS PAGE] Erro ao excluir projeto:",
        error
      );
  
    }
  
  }


  return (

    <MainLayout>

      <div className="space-y-8">


        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Projetos
            </h1>

            <p className="mt-2 text-gray-500">
              Gerencie os projetos cadastrados no sistema.
            </p>

          </div>


          <button
            onClick={() =>
              setIsCreateProjectModalOpen(true)
            }
            className="rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800"
          >
            + Novo projeto
          </button>

        </div>


        {/* Tabela */}

        {loading ? (

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

            <p className="text-gray-500">
              Carregando projetos...
            </p>

          </div>

        ) : (

          <ProjectTable
            projects={projects}
            onCreateProject={() =>
              setIsCreateProjectModalOpen(true)
            }
            onEditProject={handleEditProject}
            onDeleteProject={handleDeleteProject}
          />

          )}


        {/* Modal de criação */}

        <CreateProjectModal

          isOpen={isCreateProjectModalOpen}

          onClose={() =>
            setIsCreateProjectModalOpen(false)
          }

          onProjectCreated={() => {

            setIsCreateProjectModalOpen(false);

            loadProjects();

          }}

        />


        {/* Modal de edição */}

        <EditProjectModal

          isOpen={isEditProjectModalOpen}

          project={selectedProject}

          onClose={() => {

            setIsEditProjectModalOpen(false);

            setSelectedProject(null);

          }}

          onProjectUpdated={() => {

            setIsEditProjectModalOpen(false);

            setSelectedProject(null);

            loadProjects();

          }}

        />

      </div>

    </MainLayout>

  );

}

export default Projects;