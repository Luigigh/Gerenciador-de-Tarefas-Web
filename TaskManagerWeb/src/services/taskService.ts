import api from "../api/axios";

import type { Task } from "../types/Task";

export interface TaskData {

title: string;

description: string;

comment: string;

startDate: string;

expectedFinalDate: string;

endDate: string | null;

status: string;

priority: string;

projectId: number;

responsibleId: number;

}

export async function getTasks(): Promise<Task[]> {

    console.log(
    "[TASK SERVICE] Buscando Tasks"
    );

    const response = await api.get<Task[]>("/tasks");

    console.log(
    "[TASK SERVICE] Tasks recebidas:",
    
    response.data
);

return response.data;

}

export async function createTask(
    taskData: TaskData
    ): Promise<Task> {

    console.log(
    "[TASK SERVICE] Criando Task:",
    taskData
    );

    const response = await api.post<Task>("/tasks", taskData);

    console.log(
    "[TASK SERVICE] Task criada:",
    response.data
);

return response.data;

}

export async function updateTask(
    idTask: number,
    taskData: TaskData
    ): Promise<Task> {

    console.log(
    "[TASK SERVICE] Atualizando Task:",
    idTask
    );

    const response = await api.put<Task>(`/tasks/${idTask}`, taskData);

    console.log(
    "[TASK SERVICE] Task atualizada:",

    response.data
    );

    return response.data;

}

export async function deleteTask(
    idTask: number
    ): Promise<void> {
        
    console.log(
        "[TASK SERVICE] Excluindo Task:",
            idTask
    );
        
    await api.delete(`/tasks/${idTask}`);
        
    console.log(
    "[TASK SERVICE] Task excluída com sucesso"
    );
    
    }
    
