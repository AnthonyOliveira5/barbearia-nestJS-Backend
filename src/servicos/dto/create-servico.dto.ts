import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  tipoServico: string;

  @IsNumber({}, { message: 'Preço é obrigatório' })
  precoServico: number;
}

