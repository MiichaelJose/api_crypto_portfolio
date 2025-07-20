import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): string {
    return 'all'
  }

  @Post()
  create(@Body() data): any {
    console.log(data)

    return data
  }
}
