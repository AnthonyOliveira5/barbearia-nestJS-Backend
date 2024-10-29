import { Module } from '@nestjs/common';
import { SolicitarServicoService } from './solicitarServico.service';
import { SolicitarServicoController } from './solicitarServico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitarServico } from './entities/SolicitarServico.entity';
import { Servico } from 'src/servicos/entities/servico.entity';
import { Agendamento } from 'src/agendamento/entities/agendamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitarServico, Agendamento, Servico])],
  controllers: [SolicitarServicoController],
  providers: [SolicitarServicoService],
})
export class SolicitarServicoModule {}
