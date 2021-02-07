import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import LoggerMiddleware from 'App/middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('backend');
  app.use(LoggerMiddleware);
  await app.listen(5000, '0.0.0.0');
  app.getUrl().then(res => console.log(res));
}
bootstrap();
