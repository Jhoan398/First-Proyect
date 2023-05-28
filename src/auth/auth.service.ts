import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

import { LoginAuthInput } from './dto/login-auth.input';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    ) {}


    async ValidateLogin(loginAuthInput:LoginAuthInput): Promise<string>{
      
      const { email, password } = loginAuthInput;
      
      const isUserMatch = await this.userService.validateUser(email, password);

      if(!isUserMatch){
        return `Invalid email or password`;
      }

      //generate token

      return `Welcome ${email} :)`;

    }
}
