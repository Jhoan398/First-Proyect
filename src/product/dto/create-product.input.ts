import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';


@InputType()
export class CreateProductInput {

  @Field(() => Int, { nullable: true })
  id: number;
  
  @MaxLength(20)
  @Field(() => String, { description: 'Name of the current product' })
  productName: string;

  @MaxLength(400)
  @Field(() => String, { description: 'Description of the current product' })
  productDescription: string;
  
  @Field(() => Int, { description: 'Price of the current product' })
  productPrice: number;

  @Field(() => Int, { description: 'Product stock' })
  productStock: number;

}
