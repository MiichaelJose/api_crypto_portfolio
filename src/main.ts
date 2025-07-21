import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true, // remove chaves que não estcão no dto
      }),
   )
   const configServer = app.get(ConfigService)
   await app.listen(configServer.get<number>('PORT') ?? 3333)
}
bootstrap()
