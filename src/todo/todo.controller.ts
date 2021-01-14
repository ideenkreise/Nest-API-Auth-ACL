
import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleEnum } from 'src/auth/role.enum';
import { hasRoles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { TodoEntity } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Crud({
  model: {
    type: TodoEntity
  }
})
  
@hasRoles(RoleEnum.Admin)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@Controller('todo')

@ApiTags('ToDo')
export class TodoController implements CrudController<TodoEntity> {
  constructor(public service: TodoService) { }
}
