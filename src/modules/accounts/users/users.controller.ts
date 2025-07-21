import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDTO } from '../dtos/create-user.dto'

@Controller('accounts')
export class UsersController {
   constructor(private readonly usersService: UsersService) {}

   @HttpCode(HttpStatus.CREATED)
   @Post()
   create(@Body() data: CreateUserDTO) {
      return this.usersService.create(data)
   }
}
