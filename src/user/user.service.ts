import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argone2 from 'argon2'
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor( @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtServise:JwtService,
  ){}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where:{
        email: createUserDto.email,
      }
    })
    if(existUser) throw new BadRequestException('This email alredy exits ')

    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argone2.hash(createUserDto.password),
    })
    const token = this.jwtServise.sign({email:createUserDto.email})
    return {user , token}
  }

  async findOne(email: string){
    return await this.userRepository.findOne(  
    {
        where:{email},
         
    }
    )
  }
}
