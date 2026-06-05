import { CreateTaskUseCase } from "@/task/application/create-task.use-case";
import { ITaskRepositoryToken } from "@/task/domain/task.repository.interface";
import type { ITaskRepository} from "@/task/domain/task.repository.interface";
import { Controller, Get, Inject } from "@nestjs/common";


@Controller("tasks")
export class TasksController {

    constructor(
        @Inject(ITaskRepositoryToken) 
        private readonly taskRepository: ITaskRepository
    ) {}

    
    @Get()
    async findAll() {
        return this.taskRepository.findAll();
    }
}
