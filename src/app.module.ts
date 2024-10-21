import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClienteModule } from './cliente/cliente.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { ServicosModule } from './servicos/servicos.module';
import { SolicitarServicoModule } from './solicitar-servico/solicitar-servico.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsuariosModule, ClienteModule, AgendamentoModule, ServicosModule, SolicitarServicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
