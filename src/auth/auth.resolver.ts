import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginAuthInput } from './dto/login-auth.input';
import { User } from 'src/users/entities/user.entity';


@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => User, { name: 'Login' })
  Login(@Args('loginAuthInput') loginAuthInput: LoginAuthInput) {
    return this.authService.authenticate(loginAuthInput);
  }
}
