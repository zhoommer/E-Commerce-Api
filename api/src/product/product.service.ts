import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto/product.dto';
import { ProductType } from './types/Product.type';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(dto: ProductDto): Promise<ProductType> {
    const product = await this.prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        price: dto.price,
        discount_price: dto.discount_price,
        slug: dto.name + '/' + dto.description,
        stock: 1,
        brand: dto.brand,
        category: dto.category,
      },
    });

    if (product) {
      this.prisma.attribute.create({
        data: {
          productId: product.id,
          size: dto.size,
          color: dto.color,
        },
      });
    } else {
      throw new ForbiddenException({
        message: 'Urun kaydedilirken bir hata olustu.',
        data: [],
      });
    }

    return <ProductType>{
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      discount_price: product.discount_price.toString(),
      slug: product.slug,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
    };
  }
}
