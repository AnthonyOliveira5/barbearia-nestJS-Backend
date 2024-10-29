import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { SolicitarServico } from 'src/solicitarServico/entities/SolicitarServico.entity';
import { Servico } from 'src/servicos/entities/servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento, SolicitarServico, Servico])],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}
