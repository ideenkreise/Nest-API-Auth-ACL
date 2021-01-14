
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Role } from '../entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService extends TypeOrmCrudService<Role>{
    constructor(@InjectRepository(Role) repo) {
        super(repo)
    }
}
