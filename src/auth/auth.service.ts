import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argone2 from 'argon2'
import { IUser } from 'src/types/types';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private readonly jwtService :JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const passwordIsMatch = await argone2.verify(user.password, password)
    if (user &&  passwordIsMatch) {
      return user
    }
    throw new UnauthorizedException('user or password are incorect')
  }
  async login(user: IUser) {
    const {id, email} = user
    return{
      id,email,token:this.jwtService.sign({id:user.id, email:user.email}),
    } 
  }
}
