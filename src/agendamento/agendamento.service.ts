import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { Repository } from 'typeorm';

export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private agendamentosRepository: Repository<Agendamento>,
  ) {}

  create(createAgendamentoDto: CreateAgendamentoDto) {
    const agendamento = this.agendamentosRepository.create(createAgendamentoDto);
    return this.agendamentosRepository.save(agendamento);
  }
}
