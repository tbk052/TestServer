/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/dtos/CreateTask.dto';
import { UpdateTaskDto } from 'src/dtos/UpdateTask.dto';
import { TasksService } from 'src/tasks/service/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.findTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put(':id')
  updateTaskById(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTaskById(@Param('id') id: number) {
    await this.tasksService.deleteTask(id);
  }
}
