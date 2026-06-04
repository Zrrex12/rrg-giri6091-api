// Capa de aplicación: Define la lógica de negocio para crear una tarea
import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";


@Injectable()
export class CreateTaskUseCase{
    constructor(
        @Inject('ITaskRepositoryToken')
        private readonly taskRepository: ITaskRepository
    ){}
}