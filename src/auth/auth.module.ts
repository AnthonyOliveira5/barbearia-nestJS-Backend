import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [
    UsuariosModule,
    ClienteModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthGuard,
    RolesGuard,
  ],
})
export class AuthModule {}
