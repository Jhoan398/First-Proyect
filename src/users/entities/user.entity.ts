import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class User {

  @Field(() => Int, { name: 'id',description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, {name: 'firstName', description: 'Name' })
  @Column()
  firstName: string;

  @Field(() => String, {name: 'lastName', description: 'Last name' })
  @Column()
  lastName: string;

  @Field(() => String, { name: 'email', description: 'Email' })
  @Column()
  email: string;

  @Field(() => String, { name: 'password', description: 'Password' })
  @Column()
  password: string;

  @Field(() => Boolean, { name: 'isActive', description: 'is Active' })
  @Column()
  isActive: boolean;
}


