import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('JIRA Line Notify')
    .setDescription('JIRA Line Notify API Description')
    .setVersion('1.0.0')
    .addTag('jita-line')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  fs.writeFile('swagger.json', JSON.stringify(document), (err) => {
    if (err) {
      console.log(err)
      return err
    }
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
