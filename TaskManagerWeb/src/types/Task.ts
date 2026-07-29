export interface Task {
    idTask: number;
    
    title: string;
    
    description: string;
    
    comment: string;
    
    createdAt: string;
    
    startDate: string;
    
    expectedFinalDate: string;
    
    endDate: string | null;
    
    status: string;
    
    priority: string;
    
    projectId: number;
    
    projectName: string;
    
    responsibleId: number;
    
    responsibleName: string;
    }
    