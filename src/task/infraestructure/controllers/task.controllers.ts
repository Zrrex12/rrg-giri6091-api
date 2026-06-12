import { CreateTaskUseCase } from "@/task/application/create-task.use-case";
import { UpdateTaskUseCase } from "@/task/application/update-task.use-case";
import { GetTaskByIdUseCase } from "@/task/application/get-task-by-id.use-case";
import { DeleteTaskUseCase } from "@/task/application/delete-task.use-case";
import { ITaskRepositoryToken } from "@/task/domain/task.repository.interface";
import type { ITaskRepository} from "@/task/domain/task.repository.interface";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";

@ApiTags("tasks")

@Controller({path: "tasks", version: "1"})
export class TasksController {

    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getTaskByIdUseCase: GetTaskByIdUseCase,
        private readonly updateTaskUseCase: UpdateTaskUseCase,
        private readonly deleteTaskUseCase: DeleteTaskUseCase,
        @Inject(ITaskRepositoryToken) 
        private readonly taskRepository: ITaskRepository
    ) {}

    
    @Get()
    @ApiOperation({ summary: "Obtiene todas las tareas" })
    async findAll() {
        return this.taskRepository.findAll();
    }

    @Post()
    @ApiOperation({ summary: "Crea una nueva tarea" })
    @ApiResponse({ status: HttpStatus.CREATED, description: "La tarea ha sido creada exitosamente." })
    async create(@Body() task: CreateTaskDto) {
        return this.createTaskUseCase.execute(task.title, task.description);
    }


    @Get(":id")
    @ApiOperation({ summary: "Obtiene una tarea por su ID" })
    @ApiParam({ name: "id", description: "ID de la tarea (UUID)" })
    @ApiResponse({ status: HttpStatus.OK, description: "La tarea ha sido encontrada exitosamente." })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "No se encontró una tarea con el ID proporcionado." })    
    async findOne(id: string) {
        return this.getTaskByIdUseCase.execute(id);
    }

    @Patch(":id")
    @ApiOperation({ summary: "Actualiza una tarea por ID" })
    @ApiParam({ name: "id", description: "ID de la tarea (UUID)" })
    async update(@Param("id") id: string, @Body() updateTask: UpdateTaskDto) {
        return this.updateTaskUseCase.execute(id, updateTask);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: "Elimina una tarea por ID" })
    @ApiParam({ name: "id", description: "ID de la tarea (UUID)" })
    @ApiResponse({ status: HttpStatus.NO_CONTENT, description: "La tarea ha sido eliminada exitosamente." })
    async delete(@Param("id") id: string) {
        return this.deleteTaskUseCase.execute(id);
    }
}
