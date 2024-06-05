import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { ProductType } from './types/Product.type';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create-product')
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() dto: ProductDto): Promise<ProductType> {
    return this.productService.createProduct(dto);
  }
}
