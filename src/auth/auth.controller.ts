import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
    if (!body.email || !body.senha) {
      return { message: 'Informe e-mail e senha para efetuar o login' };
    }
    const usuario = await this.authService.validateUsuario(
      body.email,
      body.senha,
    );
    if (usuario) {
      return this.authService.login(usuario);
    } else {
      const cliente = await this.authService.validateCliente(
        body.email,
        body.senha,
      );
      if (cliente) {
        return this.authService.login(cliente);
      }
    }
    return { message: 'Usuário ou senha inválidos' };
  }
}
