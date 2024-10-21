import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitarServicoDto } from './create-solicitar-servico.dto';

export class UpdateSolicitarServicoDto extends PartialType(CreateSolicitarServicoDto) {}
