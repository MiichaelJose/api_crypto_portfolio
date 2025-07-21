import { Module } from '@nestjs/common'
import { SessionModule } from './session/session.module'
import { UsersModule } from './users/users.module'

@Module({
   imports: [SessionModule, UsersModule],
})
export class AccountsModule {}
