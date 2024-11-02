import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClienteModule } from './cliente/cliente.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { ServicosModule } from './servicos/servicos.module';
import { SolicitarServicoModule } from './solicitarServico/solicitarServico.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    UsuariosModule,
    ClienteModule,
    AgendamentoModule,
    ServicosModule,
    SolicitarServicoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
