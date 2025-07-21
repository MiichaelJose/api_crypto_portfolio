import { Module } from '@nestjs/common'
import { SessionController } from './session.controller'
import { SessionService } from './session.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entities/user.entitie'

@Module({
   controllers: [SessionController],
   providers: [SessionService],
   imports: [TypeOrmModule.forFeature([User])],
})
export class SessionModule {}
