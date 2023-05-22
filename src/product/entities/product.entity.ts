import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => String, { description: 'Name of the current product' })
  @Column()
  productName: string;


  @Field(() => String, { description: 'Description of the current product' })
  @Column()
  productDescription: string;

  
  @Field(() => Int, { description: 'Price of the current product' })
  @Column()
  productPrice: number;


  @Field(() => Int, { description: 'Product stock' })
  @Column()
  productStock: number;
  
}
