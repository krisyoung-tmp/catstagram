import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;
  app.use(express.json({ limit: '6mb' }));
  app.enableCors();
  app.use(
    express.urlencoded({
      limit: '6mb',
      extended: true,
      parameterLimit: 50000,
    })
  );
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });
}

bootstrap();
