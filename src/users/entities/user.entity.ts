import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
export class User {

  @Field(() => Int, { description: 'Example ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name' })
  @Column()
  firstName: string;

  @Field(() => String, { description: 'Last name' })
  @Column()
  lastName: string;

  @Field(() => String, { description: 'Email' })
  @Column()
  email: string;

  @Field(() => String, { description: 'Password' })
  @Column()
  password: string;

  @Field(() => Boolean, { description: 'Is active' })
  @Column()
  isActive: boolean;
}


