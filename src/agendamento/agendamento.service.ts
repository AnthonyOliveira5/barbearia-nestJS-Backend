import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Servico } from 'src/servicos/entities/servico.entity';
import { SolicitarServico } from 'src/solicitar-servico/entities/solicitar-servico.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Servico)
    private agendamentosRepository: Repository<Servico>,
    @InjectRepository(SolicitarServico)
    private solicitarServicosRepository: Repository<SolicitarServico>,
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  async create(createAgendamentoDto: CreateAgendamentoDto) {
    const servicos = await this.servicosRepository.find({
      where: {
        id: In(createAgendamentoDto.servicos.map((item) => item.servicoId)),
      },
    });

    const agendamento = this.agendamentosRepository.create({
      id: createAgendamentoDto.usuarioId,
    });

    await this.agendamentosRepository.save(agendamento);

    const items = servicos.map((servico) => {
      return this.solicitarServicosRepository.create({
        preco: servico.precoServico,
        agendamentoId: agendamento.id,
        servicoId: servico.id,
      });
    });

    await this.solicitarServicosRepository.save(items);
  }
  findAll() {
    return this.agendamentosRepository.find({
      relations: ['items', 'items.servico', 'usuario'],
    });
  }
}