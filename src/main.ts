import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true, 
    allowedHeaders: 'Content-Type, Authorization',
  });
  
  await app.listen(3001);
}

bootstrap();