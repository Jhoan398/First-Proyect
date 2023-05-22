import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>
  ){}

  async create(createProductInput: CreateProductInput):Promise<Product> {

    const product = this.ProductRepository.create(createProductInput);
    return this.ProductRepository.save(product);

  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<Product>  {
    return;
  }

  async findAll(): Promise<Product[]> {
    return this.ProductRepository.find();
  }

  async findByName(productName: string): Promise<Product>{
    return this.ProductRepository.findOne({ where: { productName } })
  }

  async findById(id: number): Promise<Product> {
    return this.ProductRepository.findOne({ where: { id } })
  }

  remove(id: number) {
    return;
  }

}
