import type {
    RoleUser,
    } from "../services/authService";
    
    export function canManageUsers(
    role: RoleUser | undefined
    ): boolean {
    
    return role === "ADMIN";
    
    }
    
    export function canCreateProjects(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER"
    );
    
    }
    
    export function canEditProjects(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER"
    );
    
    }
    
    export function canDeleteProjects(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER"
    );
    
    }
    
    export function canCreateTasks(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER"
    );
    
    }
    
    export function canEditTasks(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER" ||
    role === "DEVELOPER" ||
    role === "TESTER"
    );
    
    }
    
    export function canDeleteTasks(
    role: RoleUser | undefined
    ): boolean {
    
    return (
    role === "ADMIN" ||
    role === "MANAGER"
    );
    
    }
    
    export function canViewProjects(
    role: RoleUser | undefined
    ): boolean {
    
    return role !== undefined;
    
    }
    
    export function canViewTasks(
    role: RoleUser | undefined
    ): boolean {
    
    return role !== undefined;
    
    }
    