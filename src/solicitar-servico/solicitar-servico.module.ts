import { Module } from '@nestjs/common';
import { SolicitarServicoService } from './solicitar-servico.service';
import { SolicitarServicoController } from './solicitar-servico.controller';

@Module({
  controllers: [SolicitarServicoController],
  providers: [SolicitarServicoService],
})
export class SolicitarServicoModule {}
