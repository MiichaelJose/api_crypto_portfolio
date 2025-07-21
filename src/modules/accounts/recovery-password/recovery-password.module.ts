import { Module } from '@nestjs/common'
import { RecoveryPasswordService } from './recovery-password.service'
import { RecoveryPasswordController } from './recovery-password.controller'

@Module({
   providers: [RecoveryPasswordService],
   controllers: [RecoveryPasswordController],
})
export class RecoveryPasswordModule {}
