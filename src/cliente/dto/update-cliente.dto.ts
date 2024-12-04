import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}
export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  chaveSeguraCliente: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}