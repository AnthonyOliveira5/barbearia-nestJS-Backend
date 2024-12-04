import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ClienteService } from 'src/cliente/cliente.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usuariosService: UsuariosService,
    private clienteService: ClienteService,
  ) {}

  async validateUsuario(email: string, senha: string) {
    const usuario = await this.usuariosService.findOneByEmail(email);
    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      return usuario;
    }
    return null;
  }

  async validateCliente(email: string, senha: string) {
    const cliente = await this.clienteService.findOneByEmail(email);
    if (cliente && bcrypt.compareSync(senha, cliente.senhaCliente)) {
      return cliente;
    }
    return null;
  }

  async login(usuario: { email: string; id: number; role: string }) {
    const payload = { email: usuario.email, id: usuario.id, role: usuario.role };

    return {
      access_token: this.jwtService.sign(payload),
      role: usuario.role,
      id: usuario.id
    };
  }
}