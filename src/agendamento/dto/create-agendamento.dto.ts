import { IsDateString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAgendamentoDto {
  @IsNumber({}, { message: 'Usuário é obrigatório' })
  usuarioId: number;

  @IsDateString({}, { message: 'Data é obrigatória' })
  dataAgendamento: string;

  @ValidateNested({ each: true })
  @Type(() => CreateSolicitacaoServicoDto)
  solicitacoes: CreateSolicitacaoServicoDto[];
}

export class CreateSolicitacaoServicoDto {
  @IsNumber({}, { message: 'Serviço é obrigatório' })
  servicoId: number;

  @IsNumber({}, { message: 'Quantidade é obrigatória' })
  quantidade: number;
}