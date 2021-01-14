import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ----Swagger-----------
  
  const options = new DocumentBuilder()
    .setTitle('Authentication')
    .setDescription('The Authentication API description')
    .setVersion('1.0')
    .setDescription('Authentication')
    .addTag('Authentication - Back End')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // --------end swagger----------

  await app.listen(3001);

}
bootstrap();
