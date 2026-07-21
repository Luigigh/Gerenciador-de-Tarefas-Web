import type { User } from "../../types/User";

interface UserTableProps {
  users: User[];
}

function UserTable({ users }: UserTableProps) {
    console.log("[USER TABLE] Usuário:", users);


  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Usuários recentes
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Lista de usuários cadastrados no sistema
          </p>
        </div>

        <button className="rounded-xl bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
          + Novo usuário
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-gray-50">

            <tr className="text-xs uppercase tracking-wide text-gray-500">

              <th className="px-6 py-4">
                Usuário
              </th>

              <th className="px-6 py-4">
                E-mail
              </th>

              <th className="px-6 py-4">
                Role
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-t border-gray-100 transition hover:bg-gray-50"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                      {user.firstname.charAt(0)}
                      {user.lastName.charAt(0)}
                    </div>

                    <div>

                      <p className="font-medium text-gray-900">
                        {user.firstname} {user.lastName}
                      </p>

                      <p className="text-xs text-gray-500">
                        ID: #{user.id}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">

                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {user.role}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {user.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <button className="text-sm font-medium text-gray-500 hover:text-green-700">
                    Ver
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UserTable;