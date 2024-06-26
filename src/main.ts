/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.info(`Server is running on port 3000`);
    console.info(`Docs: http://localhost:3000/docs`);
  });
}
bootstrap();
