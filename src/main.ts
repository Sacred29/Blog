import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    
  } );
  app.enableCors()
  // Swagger bootstrap
  const config = new DocumentBuilder()
    .setTitle('Blog stuff')
    .setDescription("API for Daniel's blog stuff")
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1', app, document);


  await app.listen(process.env.PORT || 8080);
}
bootstrap();
