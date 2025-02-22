import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8080
  await app.listen(process.env.PORT ?? 8080);
  console.log(`Nest server running on port: ${port}`)
}
bootstrap();
