import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { SessionModule } from './modules/accounts/session/session.module'
import { AccountsModule } from './modules/accounts/accounts.module'

@Module({
   imports: [
      AccountsModule,
      TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'postgres',
         password: '123',
         database: 'crypto',
         //  entities: [],
         autoLoadEntities: true, // true: carrega todas as entidades
         synchronize: false, // true: nao usar em produção
      }),
      ConfigModule.forRoot({
         envFilePath: ['.development.env', '.production.env'],
      }),
   ],
})
export class AppModule {}
