"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Loader2,
  AlertCircle,
  CheckSquare,
} from "lucide-react";

export interface LoginFormProps {
  email: string;
  password: string;
  rememberMe: boolean;
  loading: boolean;
  error: string | null;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onRememberMeChange: (value: boolean) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onForgotPassword?: () => void;
}

export default function LoginForm({
  email,
  password,
  rememberMe,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onRememberMeChange,
  onSubmit,
  onForgotPassword,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = loading || !email.trim() || !password.trim();

  return (
    <div className="flex flex-col justify-center min-h-full px-8 py-10 sm:px-12 lg:px-16 bg-white">
      {/* Link voltar */}
      <div className="mb-8">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Voltar para a página inicial
        </a>
      </div>

      {/* Logo mobile (visível apenas em telas pequenas) */}
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
          <CheckSquare size={15} className="text-white" />
        </div>
        <span className="text-base font-bold text-slate-900 tracking-tight">TaskManager</span>
      </div>

      {/* Cabeçalho do formulário */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1.5">Bem-vindo de volta</h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Entre com suas credenciais para acessar o TaskManager.
        </p>
      </div>

      {/* Mensagem de erro */}
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6 text-sm"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Formulário */}
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
        {/* Campo E-mail */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-700"
          >
            E-mail
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <Mail size={16} />
            </span>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              disabled={loading}
              required
              className="
                w-full pl-10 pr-4 py-2.5 text-sm
                border border-gray-200 rounded-xl
                bg-white text-slate-900 placeholder:text-slate-400
                outline-none
                focus:border-slate-400 focus:ring-2 focus:ring-slate-200
                disabled:bg-gray-50 disabled:text-slate-400 disabled:cursor-not-allowed
                transition-all
              "
            />
          </div>
        </div>

        {/* Campo Senha */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Senha
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <Lock size={16} />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              disabled={loading}
              required
              className="
                w-full pl-10 pr-11 py-2.5 text-sm
                border border-gray-200 rounded-xl
                bg-white text-slate-900 placeholder:text-slate-400
                outline-none
                focus:border-slate-400 focus:ring-2 focus:ring-slate-200
                disabled:bg-gray-50 disabled:text-slate-400 disabled:cursor-not-allowed
                transition-all
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={loading}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              className="
                absolute right-3.5 top-1/2 -translate-y-1/2
                text-slate-400 hover:text-slate-700 transition-colors
                disabled:cursor-not-allowed disabled:opacity-50
                focus:outline-none focus:text-slate-700
              "
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Lembrar de mim + Esqueci a senha */}
        <div className="flex items-center justify-between gap-2">
          <label className="flex items-center gap-2 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => onRememberMeChange(e.target.checked)}
              disabled={loading}
              className="
                w-4 h-4 rounded
                border-gray-300 text-slate-800
                accent-slate-900
                focus:ring-2 focus:ring-slate-300
                disabled:cursor-not-allowed
              "
            />
            <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
              Lembrar de mim
            </span>
          </label>

          <button
            type="button"
            onClick={onForgotPassword}
            disabled={loading}
            className="
              text-sm text-slate-500 hover:text-slate-800
              underline underline-offset-2
              transition-colors
              disabled:cursor-not-allowed disabled:opacity-50
              focus:outline-none focus:text-slate-800
            "
          >
            Esqueci minha senha
          </button>
        </div>

        {/* Botão de submit */}
        <button
          type="submit"
          disabled={isDisabled}
          className="
            relative flex items-center justify-center gap-2
            w-full py-3 px-6 mt-1
            bg-emerald-900 text-white text-sm font-semibold
            rounded-xl
            hover:bg-emerald-700
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed
            active:scale-[0.98]
            transition-all
          "
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Entrando...
            </>
          ) : (
            "Entrar no TaskManager"
          )}
        </button>
      </form>

      {/* Rodapé do card */}
      <p className="mt-8 text-sm text-center text-slate-400 leading-relaxed">
        Não possui uma conta?{" "}
        <span className="text-slate-600 font-medium">
          Entre em contato com o administrador.
        </span>
      </p>
    </div>
  );
}
