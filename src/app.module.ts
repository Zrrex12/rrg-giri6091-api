import { Module } from '@nestjs/common';
import { TaskModule } from './task/infraestructure/task.module';

@Module({
  imports: [
    TaskModule
  ],
})
export class AppModule {}
