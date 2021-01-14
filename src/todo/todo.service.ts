import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService extends TypeOrmCrudService<TodoEntity>{
    constructor(@InjectRepository(TodoEntity) repo) {
        super(repo)
    }
}
