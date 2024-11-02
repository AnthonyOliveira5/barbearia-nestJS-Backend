import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createusuarioDto: CreateUsuarioDto) {
    const senha = await bcrypt.hash(createusuarioDto.senha, 10);
    const usuario = this.usuariosRepository.create({ ...createusuarioDto, senha });
    return this.usuariosRepository.save(usuario);
  }

  findAll() {
    return this.usuariosRepository.find();
  }
  findOne(id: number) {
    return this.usuariosRepository.findOneBy({id: id});
  }

  findOneByEmail(email: string) {
    return this.usuariosRepository.findOneBy({ email });
  }
  
  async update(id: number, updateusuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.usuariosRepository.merge(usuario, updateusuarioDto);
    return this.usuariosRepository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.usuariosRepository.remove(usuario);
  }
}
