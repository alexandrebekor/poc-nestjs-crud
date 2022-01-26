import { Query } from '@nestjs/common'
import { Resolver } from '@nestjs/graphql'
import { ProductService } from './product.service'

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query((returns) => ProductResolver, { name: 'getAllProducts' })
  async getAllProducts(): Promise<Product> {}
}
