import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../Components/login/LoginForm";
import LoginVisual from "../Components/login/LoginVisual";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
const navigate = useNavigate();

const { login } = useAuth();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [rememberMe, setRememberMe] = useState(false);

const [loading, setLoading] = useState(false);

const [error, setError] = useState<string | null>(null);

async function handleSubmit(
event: React.FormEvent<HTMLFormElement>
) {
event.preventDefault();


console.log(
  "[LOGIN] Botão de login pressionado"
);

setError(null);

setLoading(true);

try {
  console.log(
    "[LOGIN] Tentando autenticar:",
    email
  );

  const response = await loginUser({
    email,
    password,
  });
  
  console.log(
    "[LOGIN] Login realizado:",
    response
  );
  
  login(response);

  console.log(
    "[LOGIN] Redirecionando para Dashboard"
  );

  navigate(
    "/dashboard"
  );

} catch (error) {
  console.error(
    "[LOGIN] Erro ao realizar login:",
    error
  );

  setError(
    "E-mail ou senha inválidos."
  );

} finally {
  setLoading(false);
}


}

function handleForgotPassword() {
console.log(
"[LOGIN] Recuperação de senha ainda não implementada"
);


alert(
  "A recuperação de senha ainda não está disponível."
);


}

return ( <div className="flex min-h-screen">


  {/* Apresentação institucional */}
  <aside className="hidden min-h-screen shrink-0 lg:flex lg:w-[45%] xl:w-[42%]">

    <LoginVisual />

  </aside>

  {/* Formulário de Login */}
  <main className="flex min-h-screen flex-1 flex-col">

    <LoginForm
      email={email}
      password={password}
      rememberMe={rememberMe}
      loading={loading}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onRememberMeChange={setRememberMe}
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
    />

  </main>

</div>


);
}

export default Login;
