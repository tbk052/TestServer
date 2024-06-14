/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'typeorm/entities/Task';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskrepository: Repository<Task>,
  ) {}
  createTask() {}
}
