import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  tipoServico: string;

  @IsNumber({}, {message: 'Duração é obrigatório'})
  duracaoServico: number;

  @IsNumber({}, { message: 'Preço é obrigatório' })
  precoServico: number;

  @IsNotEmpty({message: "Descrição é obrigatório"})
  descricaoServico: string;

  @IsBoolean({message: "O status tem que ser verdadeiro ou falso"})
  statusServico: boolean;
}

