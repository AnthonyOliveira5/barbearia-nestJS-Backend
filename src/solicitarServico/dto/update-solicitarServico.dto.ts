import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitarServicoDto } from './create-solicitarServico.dto';

export class UpdateSolicitarServicoDto extends PartialType(CreateSolicitarServicoDto) {}
