import { Module } from "@nestjs/common";
import { TasksController } from "./controllers/task.controllers";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { TaskRepositoryImpl } from "./persistence/task.repository.impl";
import { GetTaskByIdUseCase } from "../application/get-task-by-id.use-case";
import { UpdateTaskUseCase } from "../application/update-task.use-case";
import { DeleteTaskUseCase } from "../application/delete-task.use-case";

@Module({
    controllers: [ TasksController ],
    providers: [
        CreateTaskUseCase,
        GetTaskByIdUseCase,
        UpdateTaskUseCase,
        DeleteTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl
        }
    ],
    exports: [ CreateTaskUseCase]
})
export class TaskModule {}