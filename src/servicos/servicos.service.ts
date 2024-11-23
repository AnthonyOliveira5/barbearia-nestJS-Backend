import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  create(createServicoDto: CreateServicoDto) {
    const servico = this.servicosRepository.create(createServicoDto);
    return this.servicosRepository.save(servico);
  }

  findAll() {
    return this.servicosRepository.find({
      select: ['id', 'nomeServico', 'descricaoServico', 'precoServico', 'duracaoServico', 'statusServico'],
    });
  }

  findOne(id: number) {
    return this.servicosRepository.findOneBy({id: id});
  }

  update(id: number, updateServicoDto: UpdateServicoDto) {
    return this.servicosRepository.update(id, updateServicoDto);
  }

  remove(id: number){
    return this.servicosRepository.delete(id);
  }
}
