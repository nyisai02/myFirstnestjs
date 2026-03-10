import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PROP = process.env.PORT ?? 3000;
  await app.listen( PROP, () => console.log(`Server is running on port ${PROP}`) );
}
bootstrap();
