import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field(() => Int, { nullable: true })
  id: number;

  @MaxLength(10)
  @IsNotEmpty({
    message: 'Frist Name is required'
  })
  @Field(() => String, { nullable: false })
  firstName: string;
  
  @MaxLength(15)
  @IsNotEmpty({
    message: 'Last Name is required'
  })
  @Field(() => String, { nullable: false })
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  email: string;

  @MaxLength(9)
  @IsNotEmpty()
  @Field({ nullable: false })
  password: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive?: boolean;

}
