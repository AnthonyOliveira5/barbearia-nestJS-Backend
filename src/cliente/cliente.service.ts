import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find({
      select: ['id', 'nomeCliente', 'emailCliente', 'dataNascimentoCliente'],
    });
  }

  findOne(id: number) {
    return this.clienteRepository.findOneBy({id: id});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  remove(id: number){
    return this.clienteRepository.delete(id);
  }
}
