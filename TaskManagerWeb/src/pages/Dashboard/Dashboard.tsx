import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import DashboardStats from "../../components/dashboard/DashboardStats";
import TaskStatusChart from "../../components/dashboard/TaskStatusChart";
import ProjectProgressCarousel from "../../components/dashboard/ProjectProgressCarousel";
import RecentTasks from "../../components/dashboard/RecentTasks";

import { getTasks } from "../../services/taskService";
import { getProjects } from "../../services/projectService";

import type { Task } from "../../types/Task";
import type { Project } from "../../types/Project";

function Dashboard() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);


  async function loadDashboard() {

    try {

      setLoading(true);

      setError(null);

      console.log(
        "[DASHBOARD] Buscando dados"
      );


      const [
        tasksData,
        projectsData
      ] = await Promise.all([
        getTasks(),
        getProjects(),
      ]);


      console.log(
        "[DASHBOARD] Tasks recebidas:",
        tasksData
      );


      console.log(
        "[DASHBOARD] Projetos recebidos:",
        projectsData
      );


      setTasks(tasksData);

      setProjects(projectsData);

    } catch (error) {

      console.error(
        "[DASHBOARD] Erro ao carregar dados:",
        error
      );


      setError(
        "Não foi possível carregar os dados da dashboard."
      );

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    loadDashboard();

  }, []);


  return (

    <MainLayout>

      <div className="space-y-6">


        {/* Cabeçalho */}

        <div>

          <h1 className="text-3xl font-bold text-gray-900">

            Dashboard

          </h1>


          <p className="mt-2 text-gray-500">

            Aqui está uma visão geral dos seus projetos e tarefas.

          </p>

        </div>


        {/* Carregamento */}

        {loading && (

          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">

            <p className="text-gray-500">

              Carregando dados da dashboard...

            </p>

          </div>

        )}


        {/* Erro */}

        {!loading && error && (

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

            <p className="font-medium text-red-600">

              {error}

            </p>


            <button

              onClick={loadDashboard}

              className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"

            >

              Tentar novamente

            </button>

          </div>

        )}


        {/* Conteúdo */}

        {!loading && !error && (

          <>

            {/* Cards */}

            <DashboardStats

              tasks={tasks}

              projects={projects}

            />


            {/* Gráfico e progresso */}

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

              <TaskStatusChart

                tasks={tasks}

              />


              <ProjectProgressCarousel

                projects={projects}

                tasks={tasks}

              />

            </div>


            {/* Tasks recentes */}

            <RecentTasks

              tasks={tasks}

            />

          </>

        )}


      </div>

    </MainLayout>

  );

}


export default Dashboard;