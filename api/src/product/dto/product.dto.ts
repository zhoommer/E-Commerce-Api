import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Urun adi bos deger olamaz!' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Aciklama bos deger olamaz!' })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Urun fiyati bos deger olamaz!' })
  price: number;

  @IsNumber()
  @IsOptional()
  discount_price?: number;

  @IsString()
  @IsNotEmpty({ message: 'Kategori alani bos gecilemez!' })
  category: string;

  @IsString()
  @IsNotEmpty({ message: 'Marka alani bos deger olamaz!' })
  brand: string;

  @IsString()
  @IsNotEmpty({ message: 'Beden alani bos deger olamaz!' })
  size: string;

  @IsString()
  @IsNotEmpty({ message: 'Renk alani bos deger olamaz!' })
  color: string;
}
