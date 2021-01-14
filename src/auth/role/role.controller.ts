import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Role } from '../entities/role.entity';
import { RoleService } from './role.service';

@Crud({
  model: {
    type: Role
  }
})

@Controller('role')
@ApiTags('Roles')
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) { }
}
