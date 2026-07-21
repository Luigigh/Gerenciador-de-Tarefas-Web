// src/components/users/CreateUserModal.tsx

import { useState } from "react";
import { createUser } from "../../services/userService";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: () => void;
}

function CreateUserModal({
  isOpen,
  onClose,
  onUserCreated,
}: CreateUserModalProps) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateBirth, setDateBirth] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (
    event: React.FormEvent
  ) => {
  
    event.preventDefault();
  
    console.log(
      "[CREATE USER] Enviando dados do usuário"
    );
  
    const userData = {
      firstname: firstName,
      lastName: lastName,
      email,
      password,
      phone,
      birth: dateBirth,
    };
  
    console.log(
      "[CREATE USER] Dados:",
      userData
    );
  
    try {
  
      const createdUser = await createUser(
        userData
      );
  
      console.log(
        "[CREATE USER] Usuário criado:",
        createdUser
      );
  
      onUserCreated();
  
    } catch (error) {
  
      console.error(
        "[CREATE USER] Erro ao criar usuário:",
        error
      );
  
    }
  
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Novo usuário
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Cadastre um novo usuário no sistema
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 transition hover:text-gray-700"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Nome
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Sobrenome
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Telefone
            </label>

            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Senha
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data de nascimento
            </label>

            <input
              type="date"
              value={dateBirth}
              onChange={(event) => setDateBirth(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600"
            />
          </div>

          <div className="mt-4 flex justify-end gap-3 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800"
            >
              Criar usuário
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateUserModal;