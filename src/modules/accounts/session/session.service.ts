import * as bcrypt from 'bcrypt'
import {
   Injectable,
   NotFoundException,
   UnauthorizedException,
} from '@nestjs/common'
import { User } from '../entities/user.entitie'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDTO } from '../dtos/create-user.dto'

@Injectable()
export class SessionService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
   ) {}

   async login(data: CreateUserDTO) {
      const userExist = await this.userRepository.findOneBy({
         email: data.email,
      })

      if (!userExist) {
         throw new NotFoundException('Usuário não encontrado!')
      }

      const isMatch = await bcrypt.compare(data.password, userExist.password)

      if (!isMatch) {
         throw new UnauthorizedException('Senha errada!')
      }

      return userExist
   }
}
