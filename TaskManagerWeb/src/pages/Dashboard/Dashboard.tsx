import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/dashboard/StatCard";
import UserTable from "../../components/dashboard/UserTable";
import { getUsers } from "../../services/userService";
import type { User } from "../../types/User";
import CreateUserModal from "../../components/users/CreateUserModal";

function Dashboard() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

  async function loadUsers() {

    try {
  
      console.log(
        "[DASHBOARD] Buscando usuários"
      );
  
      const data = await getUsers();
  
      setUsers(data);
  
    } catch (error) {
  
      console.error(
        "[DASHBOARD] Erro ao carregar usuários:",
        error
      );
  
    } finally {
  
      setLoading(false);
  
    }
  
  }


  useEffect(() => {

    loadUsers();

  }, []);


  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "ACTIVE"
  ).length;

  const adminUsers = users.filter(
    (user) => user.role === "ADMIN"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "INACTIVE"
  ).length;

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Bem-vindo de volta, Luigi. Aqui está um resumo do sistema.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total de usuários"
            value={totalUsers}
            description="Usuários cadastrados"
            icon="♙"
          />

          <StatCard
            title="Usuários ativos"
            value={activeUsers}
            description="Contas ativas no sistema"
            icon="✓"
          />

          <StatCard
            title="Administradores"
            value={adminUsers}
            description="Usuários com acesso administrativo"
            icon="★"
          />

          <StatCard
            title="Usuários inativos"
            value={inactiveUsers}
            description="Contas desativadas"
            icon="○"
          />

        </div>

        {/* Tabela */}

        {loading ? (

          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-500">
              Carregando usuários...
            </p>
          </div>

        ) : (

          <UserTable 
            users={users}
            onCreateUser={() => setIsCreateUserModalOpen(true)}
            />

        )}

        <CreateUserModal
          isOpen={isCreateUserModalOpen}
          onClose={() => 
            setIsCreateUserModalOpen(false)
          }
          onUserCreated={() => {
            setIsCreateUserModalOpen(false);
            loadUsers();
          }}
        />

      </div>

    </MainLayout>

  );
}

export default Dashboard;