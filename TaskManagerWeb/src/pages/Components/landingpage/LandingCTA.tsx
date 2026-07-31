import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LandingCTA() {
  return (
    <section
      className="py-20 bg-emerald-900"
      aria-labelledby="cta-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            id="cta-title"
            className="text-3xl lg:text-4xl font-bold text-white text-balance"
          >
            Tenha mais controle sobre seus projetos e tarefas
          </h2>

          <p className="text-base text-slate-400 leading-relaxed text-pretty">
            Organize o trabalho da sua equipe e acompanhe cada etapa em uma única plataforma.
          </p>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-emerald-900 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Acessar o TaskManager
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
