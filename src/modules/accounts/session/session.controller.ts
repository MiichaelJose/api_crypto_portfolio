import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { SessionService } from './session.service'

@Controller('session')
export class SessionController {
   constructor(private sessionService: SessionService) {}

   @HttpCode(HttpStatus.OK)
   @Post()
   login(@Body() data: CreateUserDTO) {
      return this.sessionService.login(data)
   }
}
