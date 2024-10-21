import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitarServicoService } from './solicitar-servico.service';
import { CreateSolicitarServicoDto } from './dto/create-solicitar-servico.dto';
import { UpdateSolicitarServicoDto } from './dto/update-solicitar-servico.dto';

@Controller('solicitar-servico')
export class SolicitarServicoController {
  constructor(private readonly solicitarServicoService: SolicitarServicoService) {}

  @Post()
  create(@Body() createSolicitarServicoDto: CreateSolicitarServicoDto) {
    return this.solicitarServicoService.create(createSolicitarServicoDto);
  }

  @Get()
  findAll() {
    return this.solicitarServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitarServicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitarServicoDto: UpdateSolicitarServicoDto) {
    return this.solicitarServicoService.update(+id, updateSolicitarServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitarServicoService.remove(+id);
  }
}
