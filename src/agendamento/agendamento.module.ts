import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento])],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}
