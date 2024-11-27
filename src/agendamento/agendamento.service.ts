import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Servico } from 'src/servicos/entities/servico.entity';
import { SolicitarServico } from 'src/solicitarServico/entities/SolicitarServico.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { Agendamento } from './entities/agendamento.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private agendamentosRepository: Repository<Agendamento>,
    @InjectRepository(SolicitarServico)
    private solicitarServicosRepository: Repository<SolicitarServico>,
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  async create(createAgendamentoDto: CreateAgendamentoDto) {
    const servicos = await this.servicosRepository.find({
      where: { id: In(createAgendamentoDto.solicitacoes.map((item) => item.servicoId)) },
    });
  
    const total = servicos.reduce((acc, servico) => {
      const item = createAgendamentoDto.solicitacoes.find(
        (solic) => solic.servicoId === servico.id,
      );
      return acc + servico.precoServico * item.quantidade;
    }, 0);
  
    const agendamento = this.agendamentosRepository.create({
      usuarioId: createAgendamentoDto.usuarioId,
      clienteId: createAgendamentoDto.clienteId,
      dataAgendamento: createAgendamentoDto.dataAgendamento,
      total,
    });
  
    await this.agendamentosRepository.save(agendamento);
  
    const solicitacoes = servicos.map((servico) => {
      const item = createAgendamentoDto.solicitacoes.find(
        (solic) => solic.servicoId === servico.id,
      );
      return this.solicitarServicosRepository.create({
        quantidade: item.quantidade,
        preco: servico.precoServico,
        total: servico.precoServico * item.quantidade,
        agendamentoId: agendamento.id,
        servicoId: servico.id,
      });
    });
  
    await this.solicitarServicosRepository.save(solicitacoes);
  
    return agendamento;
  }
  findAll() {
    return this.agendamentosRepository.find({
      relations: ['solicitacoes', 'solicitacoes.servico', 'cliente'],
    });
  }

  findOne(id: number) {
    return this.agendamentosRepository.findOneBy({id: id});
  }

  update(id: number, updateAgendamentoDto: UpdateAgendamentoDto) {
    return this.agendamentosRepository.update(id, updateAgendamentoDto);
  }

  remove(id: number){
    return this.agendamentosRepository.delete(id);
  }
}