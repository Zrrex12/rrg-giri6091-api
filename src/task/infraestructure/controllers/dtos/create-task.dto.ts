import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateTaskDto {

    @ApiProperty({
        description: "El título de la tarea",
        example: "This is a sample task title",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)   
    title!: string;

    @ApiProperty({
        description: "Descripción de la tarea",
        example: "This is a sample task description",
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(200)
    description!: string;
}