import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usuariosService: UsuariosService,
  ) {}

  async validateUsuario(email: string, senha: string) {
    const usuario = await this.usuariosService.findOneByEmail(email);
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      return usuario;
    }
    return null;
  }

  async login(usuario: { email: string; id: number }) {
    const payload = { email: usuario.email, id: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}