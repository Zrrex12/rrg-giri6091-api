import { Module } from "@nestjs/common";
import { TasksController } from "./controllers/task.controllers";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { TaskRepositoryImpl } from "./persistence/task.repository.impl";

@Module({
    controllers: [ TasksController ],
    providers: [
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl
        }
    ],
    exports: [ CreateTaskUseCase]
})
export class TaskModule {}