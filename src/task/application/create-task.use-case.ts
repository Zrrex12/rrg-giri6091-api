// Capa de aplicación: Define la lógica de negocio para crear una tarea
import { Inject, Injectable } from "@nestjs/common";
import {Task} from "../domain/task.entity";
import * as taskRepositoryInterface from "../domain/task.repository.interface";


@Injectable()
export class CreateTaskUseCase{
    constructor(
        @Inject(taskRepositoryInterface.ITaskRepositoryToken)
        private readonly taskRepository: taskRepositoryInterface.ITaskRepository,
    ){}

    async execute(title: string, description: string): Promise<Task> {
        const crypto = await import('crypto');
        const task = new Task(
            crypto.randomUUID(),
            title,
            description,
            'PENDING',
            new Date(),
        );
        return this.taskRepository.create(task);
    }
}