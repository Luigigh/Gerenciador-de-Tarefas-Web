import { Calendar, User, FolderOpen } from "lucide-react";

interface PreviewCard {
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  project: string;
  assignee: string;
  date: string;
}

interface PreviewColumn {
  label: string;
  headerClass: string;
  dotClass: string;
  bgClass: string;
  cards: PreviewCard[];
}

const priorityConfig = {
  LOW: { label: "Baixa", className: "bg-emerald-100 text-emerald-700 border border-emerald-200" },
  MEDIUM: { label: "Média", className: "bg-amber-100 text-amber-700 border border-amber-200" },
  HIGH: { label: "Alta", className: "bg-red-100 text-red-700 border border-red-200" },
  CRITICAL: { label: "Crítica", className: "bg-purple-100 text-purple-800 border border-purple-200" },
};

const COLUMNS: PreviewColumn[] = [
  {
    label: "Não iniciadas",
    headerClass: "text-slate-600",
    dotClass: "bg-slate-400",
    bgClass: "bg-slate-50",
    cards: [
      { title: "Estruturar banco de dados", priority: "HIGH", project: "Portal Interno", assignee: "Ana Lima", date: "15 ago. 2026" },
      { title: "Criar testes unitários", priority: "MEDIUM", project: "App Mobile", assignee: "Bruno Costa", date: "20 ago. 2026" },
    ],
  },
  {
    label: "Em progresso",
    headerClass: "text-blue-700",
    dotClass: "bg-blue-500",
    bgClass: "bg-blue-50/60",
    cards: [
      { title: "Desenvolver tela de login", priority: "HIGH", project: "Portal Interno", assignee: "Carla Souza", date: "10 ago. 2026" },
      { title: "Integrar API de pagamentos", priority: "CRITICAL", project: "E-commerce", assignee: "Diego Alves", date: "08 ago. 2026" },
    ],
  },
  {
    label: "Em revisão",
    headerClass: "text-amber-700",
    dotClass: "bg-amber-400",
    bgClass: "bg-amber-50/60",
    cards: [
      { title: "Revisar documentação técnica", priority: "MEDIUM", project: "Portal Interno", assignee: "Elisa Faro", date: "12 ago. 2026" },
    ],
  },
  {
    label: "Concluídas",
    headerClass: "text-emerald-700",
    dotClass: "bg-emerald-500",
    bgClass: "bg-emerald-50/60",
    cards: [
      { title: "Configurar ambiente de dev", priority: "LOW", project: "App Mobile", assignee: "Felipe Neto", date: "02 ago. 2026" },
      { title: "Levantamento de requisitos", priority: "MEDIUM", project: "E-commerce", assignee: "Gabriela Mota", date: "01 ago. 2026" },
    ],
  },
];

function MiniCard({ card }: { card: PreviewCard }) {
  const p = priorityConfig[card.priority];
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-semibold text-gray-800 leading-snug flex-1 line-clamp-2">{card.title}</p>
        <span className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${p.className}`}>{p.label}</span>
      </div>
      <div className="flex flex-col gap-1 text-[10px] text-gray-500">
        <div className="flex items-center gap-1">
          <FolderOpen size={10} className="text-gray-400 shrink-0" />
          <span className="truncate">{card.project}</span>
        </div>
        <div className="flex items-center gap-1">
          <User size={10} className="text-gray-400 shrink-0" />
          <span className="truncate">{card.assignee}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={10} className="text-gray-400 shrink-0" />
          <span>{card.date}</span>
        </div>
      </div>
    </div>
  );
}

interface KanbanPreviewProps {
  /** Número máximo de colunas exibidas (padrão: 4) */
  maxColumns?: number;
  /** Número máximo de cards por coluna (padrão: 2) */
  maxCards?: number;
  className?: string;
}

export default function KanbanPreview({
  maxColumns = 4,
  maxCards = 2,
  className = "",
}: KanbanPreviewProps) {
  const columns = COLUMNS.slice(0, maxColumns);

  return (
    <div className={`flex gap-3 overflow-x-auto pb-2 ${className}`} aria-hidden="true">
      {columns.map((col) => (
        <div
          key={col.label}
          className={`flex flex-col rounded-2xl border border-gray-200/70 ${col.bgClass} min-w-[200px] flex-1`}
        >
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-200/80">
            <span className={`w-2 h-2 rounded-full ${col.dotClass}`} />
            <h3 className={`text-xs font-semibold ${col.headerClass} flex-1`}>{col.label}</h3>
            <span className="text-[10px] font-medium bg-white border border-gray-200 text-gray-500 rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center">
              {col.cards.length}
            </span>
          </div>
          <div className="flex flex-col gap-2 p-2">
            {col.cards.slice(0, maxCards).map((card) => (
              <MiniCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
