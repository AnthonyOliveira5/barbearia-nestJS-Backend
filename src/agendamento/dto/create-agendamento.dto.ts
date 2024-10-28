import { IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAgendamentoDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSolicitarServicoDto)
  servicos: CreateSolicitarServicoDto[];

  @IsNumber({}, { message: 'Usuário é obrigatório' })
  usuarioId: number;
}

export class CreateSolicitarServicoDto {
  @IsNumber({}, { message: 'Produto é obrigatório' })
  SolicitarServicoId: number;

  @IsNumber({}, { message: 'Quantidade é obrigatória' })
  quantidade: number;
  servicoId: any;
}
