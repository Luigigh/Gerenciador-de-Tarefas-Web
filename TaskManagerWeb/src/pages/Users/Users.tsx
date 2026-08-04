import {
    useEffect,
    useState,
    } from "react";
    
    import MainLayout from "../../layouts/MainLayout";
    
    import UserTable from "../../components/dashboard/UserTable";
    import CreateUserModal from "../../components/users/CreateUserModal";
    
    import {
    getUsers,
    } from "../../services/userService";
    
    import type {
    User,
    } from "../../types/User";
    
    function Users() {
    
    const [
    users,
    setUsers,
    ] = useState<User[]>([]);
    
    const [
    loading,
    setLoading,
    ] = useState(true);
    
    const [
    isCreateUserModalOpen,
    setIsCreateUserModalOpen,
    ] = useState(false);
    
    async function loadUsers() {
    
    try {
    
      console.log(
        "[USERS] Buscando usuários"
      );
    
      const data = await getUsers();
    
      console.log(
        "[USERS] Usuários recebidos:",
        data
      );
    
      setUsers(data);
    
    } catch (error) {
    
      console.error(
        "[USERS] Erro ao carregar usuários:",
        error
      );
    
    } finally {
    
      setLoading(false);
    
    }
    
    }
    
    useEffect(() => {
    
    loadUsers();
    
    }, []);
    
    return (
    
    <MainLayout>
    
      <div className="space-y-8">
    
        <div>
    
          <h1 className="text-3xl font-bold text-gray-900">
            Gerenciamento de Usuários
          </h1>
    
          <p className="mt-2 text-gray-500">
            Gerencie os usuários e permissões do sistema.
          </p>
    
        </div>
    
    
        {loading ? (
    
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
    
            <p className="text-gray-500">
              Carregando usuários...
            </p>
    
          </div>
    
        ) : (
    
          <UserTable
            users={users}
            onCreateUser={() =>
              setIsCreateUserModalOpen(true)
            }
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
    
    export default Users;
    