//! Dealer (contratador del repositorio): Define la interfaz del repositorio para la entidad "Task"
//! Repository: Interfaz que define las operaciones de acceso a datos para la entidad "Task"
import { Task } from "./task.entity";

export interface ITaskRepository {
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
    update(task: Task): Promise<Task>;
    delete(id: string): Promise<boolean>;
}

//Token para la inyeccion de dependencias
export const ITaskRepositoryToken = Symbol('ITaskRepository');