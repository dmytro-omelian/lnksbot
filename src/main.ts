import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Set up views with Handlebars
  app.setViewEngine('hbs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  
  // Serve static files
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  // Enable CORS for Vercel deployment
  app.enableCors();
  
  // Use environment port or default to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}

// For Vercel serverless deployment
export default async function handler(req: any, res: any) {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
  server.setViewEngine('hbs');
  server.setBaseViewsDir(join(__dirname, '..', 'views'));
  server.useStaticAssets(join(__dirname, '..', 'public'));
  server.enableCors();
  
  // Initialize the server
  await server.init();
  
  // Get the HTTP adapter
  const instance = server.getHttpAdapter().getInstance();
  
  // Forward the request to the NestJS instance
  return instance(req, res);
}
bootstrap();
