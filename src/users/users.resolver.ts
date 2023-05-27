import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'GetUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'Login' })
  Login(@Args('email', { type: () => String }) email: string, @Args('password', { type: () => String }) password: string) {
    return this.userService.validateUser(email, password);
  }


  @Query(() => User, { name: 'GetUser', description: 'Get the user by id'})
  findOne(@Args('id', { type: () => Int }) id: number) {
      return this.userService.findById(id)
  }

  @Mutation(() => User, { name: 'CreateUser', description: 'Allow to create user'} )
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
  
}
