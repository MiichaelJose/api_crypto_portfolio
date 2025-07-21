import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
   Unique,
   //    Check,
} from 'typeorm'

@Entity({ schema: 'users', name: 'users' })
@Unique(['email'])
// @Check(`"status" = ANY (ARRAY['pending', 'active', 'inactive'])`)
export class User {
   @PrimaryGeneratedColumn('increment')
   id: number

   @Column({ type: 'varchar', length: 340 })
   email: string

   @Column({ type: 'varchar', length: 255, nullable: true })
   password: string

   @Column({ type: 'text', default: 'pending' })
   status?: 'pending' | 'active' | 'inactive'

   @Column({ name: '2afSecret', type: 'varchar', length: 255, nullable: true })
   twoFactorSecret?: string

   @Column({
      name: '2afActivated',
      type: 'bool',
      default: false,
      nullable: true,
   })
   twoFactorActivated?: boolean

   @CreateDateColumn({ name: 'createdAt', type: 'timestamp' })
   createdAt: Date

   @UpdateDateColumn({ name: 'updatedAt', type: 'timestamp' })
   updatedAt: Date

   @Column({ type: 'jsonb', default: () => `'{}'`, nullable: true })
   notification?: Record<string, any>

   @Column({ name: 'indicatedOrganizationId', type: 'int', nullable: true })
   indicatedOrganizationId?: number

   @Column({ name: 'indicatedUserId', type: 'int', nullable: true })
   indicatedUserId?: number
}
