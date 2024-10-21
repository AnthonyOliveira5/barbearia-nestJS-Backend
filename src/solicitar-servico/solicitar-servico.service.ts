import { Injectable } from '@nestjs/common';
import { CreateSolicitarServicoDto } from './dto/create-solicitar-servico.dto';
import { UpdateSolicitarServicoDto } from './dto/update-solicitar-servico.dto';

@Injectable()
export class SolicitarServicoService {
  create(createSolicitarServicoDto: CreateSolicitarServicoDto) {
    return 'This action adds a new solicitarServico';
  }

  findAll() {
    return `This action returns all solicitarServico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitarServico`;
  }

  update(id: number, updateSolicitarServicoDto: UpdateSolicitarServicoDto) {
    return `This action updates a #${id} solicitarServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitarServico`;
  }
}
