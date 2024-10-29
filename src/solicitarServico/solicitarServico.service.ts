import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitarServicoDto } from './dto/create-solicitarServico.dto';
import { UpdateSolicitarServicoDto } from './dto/update-solicitarServico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitarServico } from './entities/SolicitarServico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitarServicoService {
  constructor(
    @InjectRepository(SolicitarServico)
    private solicitarServicoRepository: Repository<SolicitarServico>,
  ) {}

  create(createSolicitarServicoDto: CreateSolicitarServicoDto) {
    const solicitarServico = this.solicitarServicoRepository.create(createSolicitarServicoDto);
    return this.solicitarServicoRepository.save(solicitarServico);
  }

  findAll() {
    return this.solicitarServicoRepository.find();
  }

  findOne(id: number) {
    return this.solicitarServicoRepository.findOneBy({id: id});
  }

  async update(id: number, updateSolicitarServicoDto: UpdateSolicitarServicoDto) {
    const solicitarServico = await this.solicitarServicoRepository.findOneBy({ id });
    if (!solicitarServico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    this.solicitarServicoRepository.merge(solicitarServico, updateSolicitarServicoDto);
    return this.solicitarServicoRepository.save(solicitarServico);
  }

  async remove(id: number) {
    const solicitarServico = await this.solicitarServicoRepository.findOneBy({ id });
    if (!solicitarServico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    return this.solicitarServicoRepository.remove(solicitarServico);
  }
}
