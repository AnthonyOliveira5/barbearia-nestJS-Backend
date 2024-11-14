import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nomeServico: string;
  
  @IsNotEmpty({message: "Descrição é obrigatório"})
  descricaoServico: string;
  
  @IsNumber({}, { message: 'Preço é obrigatório' })
  precoServico: number;

  @IsNumber({}, {message: 'Duração é obrigatório'})
  duracaoServico: number;

  @IsBoolean({message: "O status tem que ser verdadeiro ou falso"})
  statusServico: boolean;
}

