import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field({ nullable: true })
  id: number;

  @MaxLength(10)
  @IsNotEmpty({
    message: 'Frist Name is required'
  })
  @Field({ nullable: false })
  firstName: string;
  
  @MaxLength(15)
  @IsNotEmpty({
    message: 'Last Name is required'
  })
  @Field({ nullable: false })
  lastName: string;

  @IsNotEmpty()
  @Field({ nullable: false })
  email: string;

  @MaxLength(9)
  @IsNotEmpty()
  @Field({ nullable: false })
  password: string;

  @Field({ nullable: true, defaultValue: true })
  isActive?: boolean;

}
