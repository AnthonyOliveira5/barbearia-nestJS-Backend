import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('Roles exigidas:', requiredRoles);
    console.log('Usuário autenticado:', user);

    if (!user) {
      console.error('Usuário não encontrado no request');
      return false;
    }

    return requiredRoles.includes(user.role);
  }
}
