import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { LoginAuthInput } from './dto/login-auth.input';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}


}
