import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      console.log('Token não fornecido');
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);
      console.log('Payload do Token:', decoded);
      request.user = decoded;
      return true;
    } catch (error) {
      console.error('Erro ao validar o token:', error.message);
      return false;
    }
  }
}
