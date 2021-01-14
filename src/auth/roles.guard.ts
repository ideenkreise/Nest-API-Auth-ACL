
import { Dependencies, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';
import { ROLES_KEY } from './roles.decorator';



@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
  constructor(
    private reflector: Reflector, 
    private readonly authService: AuthService
    ) {
    this.reflector = reflector;
  }

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }    
    const { user } = context.switchToHttp().getRequest();   
   return requiredRoles.some((role) => {
     return  user.roles.some(item => item.role === role); 
    });
  }
}