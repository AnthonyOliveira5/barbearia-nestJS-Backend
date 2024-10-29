import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SolicitarServicoService } from './solicitarServico.service';
import { CreateSolicitarServicoDto } from './dto/create-solicitarServico.dto';
import { UpdateSolicitarServicoDto } from './dto/update-solicitarServico.dto';

@Controller('SolicitarServico')
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSolicitarServicoDto: UpdateSolicitarServicoDto) {
    return this.solicitarServicoService.update(+id, updateSolicitarServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitarServicoService.remove(+id);
  }
}
