import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { LoginAuthInput } from './dto/login-auth.input';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async authenticate(loginAuthInput: LoginAuthInput): Promise<User> {
    
    const user = await this.userService.findByEmail(loginAuthInput.email);
    
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await compare(loginAuthInput.password, user.password);

    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    return user;
  }


}
