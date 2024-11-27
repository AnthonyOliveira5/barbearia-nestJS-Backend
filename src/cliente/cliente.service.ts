import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const senhaCliente = await bcrypt.hash(createClienteDto.senhaCliente, 10);
    const cliente = this.clienteRepository.create({ ...createClienteDto, senhaCliente });
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find({
      select: ['id', 'nomeCliente', 'emailCliente', 'dataNascimentoCliente', 'solicitarServicos'],
    });
  }

  async findOne(id: number) {
    const cliente = await this.clienteRepository.findOneBy({id: id});
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clienteRepository.findOneBy({id: id});
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return this.clienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    const cliente = await this.clienteRepository.findOneBy({id: id});
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return this.clienteRepository.delete(id);
  }
}
