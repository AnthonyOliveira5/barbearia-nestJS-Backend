import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsuariosModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}