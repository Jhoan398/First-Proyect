import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

@InputType()
export class LoginAuthInput {
  
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String, { description: 'Email from user', nullable: false })
  email: string;

  @IsNotEmpty()
  @MaxLength(8)
  @Field(() => String, { description: 'Password from user', nullable: false } )
  password: string;

}
