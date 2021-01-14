
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles) => SetMetadata(ROLES_KEY, roles);

export const hasRoles = (...hasRoles : String[])=>SetMetadata(ROLES_KEY,hasRoles);