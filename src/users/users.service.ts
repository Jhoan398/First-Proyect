import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }
  
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User>{

    const user = this.userRepository.findOne({ where: {id } });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(createUserInput: CreateUserInput): Promise<User>{
    const user = this.userRepository.create(createUserInput);
    this.userRepository.save(user);

    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {

    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    Object.assign(user, updateUserInput);
    this.userRepository.save(user);
    return user;
  }

}