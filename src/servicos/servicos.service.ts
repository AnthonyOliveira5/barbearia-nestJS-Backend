import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity';
import { CreateServicoDto } from './dto/create-servico.dto';

export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  create(createServicoDto: CreateServicoDto) {
    const servico = this.servicosRepository.create(createServicoDto);
    return this.servicosRepository.save(servico);
  }
}
