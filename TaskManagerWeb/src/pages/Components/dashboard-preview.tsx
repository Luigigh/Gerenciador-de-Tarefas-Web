import { CheckCircle2, Circle, Clock, MoreHorizontal, CheckSquare } from 'lucide-react'

const tasks = [
  { id: 1, title: 'Revisar proposta do cliente', status: 'done', assignee: 'Ana' },
  { id: 2, title: 'Atualizar documentação da API', status: 'done', assignee: 'Bruno' },
  { id: 3, title: 'Implementar tela de login', status: 'progress', assignee: 'Carol' },
  { id: 4, title: 'Testar fluxo de pagamento', status: 'pending', assignee: 'Diego' },
  { id: 5, title: 'Deploy em produção', status: 'pending', assignee: 'Ana' },
]

const statusBadge: Record<string, { label: string; class: string }> = {
  done: { label: 'Concluída', class: 'bg-accent text-accent-foreground' },
  progress: { label: 'Em andamento', class: 'bg-yellow-50 text-yellow-700' },
  pending: { label: 'Pendente', class: 'bg-muted text-muted-foreground' },
}

const avatarColors: Record<string, string> = {
  Ana: 'bg-emerald-100 text-emerald-700',
  Bruno: 'bg-blue-100 text-blue-700',
  Carol: 'bg-purple-100 text-purple-700',
  Diego: 'bg-orange-100 text-orange-700',
}

export function DashboardPreview() {
  const totalTasks = tasks.length
  const completed = tasks.filter((t) => t.status === 'done').length
  const progress = Math.round((completed / totalTasks) * 100)

  return (
    <section id="preview" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Veja o <span className="text-primary">TaskManager</span> em ação
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto text-balance leading-relaxed">
            Uma prévia do dashboard que te espera depois do cadastro.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border shadow-2xl overflow-hidden">
          {/* Browser chrome */}
          <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border max-w-xs mx-auto text-center">
              app.taskmanager.com
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-background">
            {/* Dashboard header */}
            <div className="border-b border-border px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">TaskManager</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
                  A
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats */}
              <div className="md:col-span-1 flex flex-col gap-4">
                {/* Stat card 1 */}
                <div className="border border-border rounded-xl p-4 flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Total de tarefas</p>
                  <p className="text-3xl font-bold text-foreground">{totalTasks}</p>
                  <p className="text-xs text-muted-foreground">Neste projeto</p>
                </div>
                {/* Stat card 2 */}
                <div className="border border-border rounded-xl p-4 flex flex-col gap-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Concluídas</p>
                  <p className="text-3xl font-bold text-primary">{completed}</p>
                  <p className="text-xs text-muted-foreground">de {totalTasks} tarefas</p>
                </div>
                {/* Progress */}
                <div className="border border-border rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Progresso</p>
                    <span className="text-xs font-semibold text-primary">{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Task list */}
              <div className="md:col-span-2 border border-border rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground text-sm">Tarefas do projeto</h3>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <ul className="divide-y divide-border">
                  {tasks.map((task) => (
                    <li key={task.id} className="px-4 py-3 flex items-center gap-3">
                      {task.status === 'done' ? (
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : task.status === 'progress' ? (
                        <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span
                        className={`flex-1 text-sm ${
                          task.status === 'done'
                            ? 'line-through text-muted-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {task.title}
                      </span>
                      <span
                        className={`hidden sm:inline-flex text-xs font-medium px-2 py-0.5 rounded-full ${statusBadge[task.status].class}`}
                      >
                        {statusBadge[task.status].label}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${avatarColors[task.assignee]}`}
                        title={task.assignee}
                      >
                        {task.assignee[0]}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
