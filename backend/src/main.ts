import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ApmLogger } from './utils/Logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ApmLogger()
  })
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(3210)
}

bootstrap()
