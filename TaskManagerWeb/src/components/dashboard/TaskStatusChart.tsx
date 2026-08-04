"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type {
    Task,
  } from "../../types/Task";
export interface TaskStatusChartProps {
  tasks: Task[];
}

const STATUS_CONFIG = [
  { key: "NOT_STARTED", label: "Não iniciadas", color: "#64748b" },
  { key: "IN_PROGRESS",  label: "Em progresso",  color: "#1d4ed8" },
  { key: "REVIEW",       label: "Em revisão",    color: "#d97706" },
  { key: "COMPLETED",    label: "Concluídas",    color: "#059669" },
] as const;

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number; payload: { label: string; color: string } }[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const { value, payload: data } = payload[0];
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-lg text-sm">
      <p className="font-semibold text-slate-800">{data.label}</p>
      <p className="text-gray-500 mt-0.5">
        <span className="font-bold" style={{ color: data.color }}>{value}</span>
        {" "}task{value !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default function TaskStatusChart({ tasks }: TaskStatusChartProps) {
  const data = STATUS_CONFIG.map(({ key, label, color }) => ({
    label,
    color,
    value: tasks.filter((t) => t.status === key).length,
  }));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-base font-semibold text-slate-900">Tasks por status</h2>
        <p className="text-sm text-gray-500 mt-0.5">Distribuição atual de todas as tasks</p>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }} barCategoryGap="40%">
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="4 4" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={52}>
              {data.map((entry) => (
                <Cell key={entry.label} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legenda manual */}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {data.map((entry) => (
          <div key={entry.label} className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: entry.color }} />
            {entry.label}
            <span className="font-semibold text-slate-700">({entry.value})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
