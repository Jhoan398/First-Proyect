import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) {}

  
  async findAll(): Promise<user[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number) {

    const userFound = await this.prisma.user.findUnique({
      where: { id },
    });
    
    if(!userFound){
      throw new Error(`User with id ${id} not found`);
    }

    return userFound;
  }

  async findByEmail(email: string): Promise<user> {
    return await this.prisma.user.findFirst({
       where: { email },
      });
  }

  async create(userInput: CreateUserInput): Promise<user> {
    const { id, firstName, lastName, email, password, isActive } = userInput;

    const hashpassword = await hash(password);

    return this.prisma.user.create({
      data: {
      id,
      firstName,
      lastName,
      email,
      password: hashpassword,
      isActive,
    },
    });
    
  }


  async validateUser(email: string, password: string): Promise<user>
  {
    const userFound = await this.findByEmail(email);

    if(!userFound){
      throw new Error(`User with email ${email} not found`);
    }


    const isPasswordValid = await verify(userFound.password, password);
    
    if(!isPasswordValid){
      throw new Error(`Incorrect password`);
    }
  
    return userFound;
  }

   

  
  async update(id: number, updateUser: UpdateUserInput): Promise<user> {

    const userFound = await this.findById(id);

    if (!userFound) {
      throw new Error(`User with ID ${userFound} not found`);
    }

    return await this.prisma.user.update({
      where: { id },
      data: updateUser,
    });      
  }


  async remove(id: number) {

    const userFound = await this.findById(id);

    if (!userFound) {
      throw new Error(`User with ID ${id} not found`);
    }

    return await this.prisma.user.delete({
      where: { id },
    });
  }

}