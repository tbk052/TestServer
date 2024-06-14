/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskParams, UpdateTaskParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { Task } from 'typeorm/entities/Task';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  findTasks() {
    return this.taskRepository.find();
  }

  createTask(taskDetails: CreateTaskParams) {
    const newTask = this.taskRepository.create({
      ...taskDetails,
      createdAt: new Date(),
    });
    return this.taskRepository.save(newTask);
  }

  updateTask(id: number, updateTaskDetails: UpdateTaskParams) {
    return this.taskRepository.update(
      { id },
      {
        ...updateTaskDetails,
        // updatedAt: new Date(),
      },
    );
  }

  deleteTask(id: number) {
    return this.taskRepository.delete(id);
  }
}
