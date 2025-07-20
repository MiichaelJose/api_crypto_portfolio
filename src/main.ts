import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configServer = app.get(ConfigService)
  await app.listen(configServer.get<number>('PORT') ?? 3333)
}
bootstrap()
