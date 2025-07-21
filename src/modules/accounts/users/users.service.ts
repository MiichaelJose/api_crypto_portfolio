import * as bcrypt from 'bcrypt'
import { ConflictException, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entitie'
import { CreateUserDTO } from '../dtos/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
   ) {}
   async create(data: CreateUserDTO) {
      const emailExisting = await this.userRepository.existsBy({
         email: data.email,
      })
      if (emailExisting) {
         throw new ConflictException('E-mail já cadastrado')
      }

      const hash = await bcrypt.hash(data.password, 10)

      const newUser = {
         ...data,
         password: hash,
      }

      return await this.userRepository.save(newUser)
   }
}
