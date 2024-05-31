import { GENDER } from '@prisma/client';
import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty({ message: 'Isim bos gecilemez!' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Soyisim bos gecilemez!' })
  @IsString()
  surname: string;

  birtDate?: string;

  gender?: GENDER;

  @IsNotEmpty({ message: 'Telefon numarasi bos gecilemez!' })
  @IsMobilePhone('tr-TR')
  phone: string;

  @IsNotEmpty({ message: 'Email bos gecilemez!' })
  @IsEmail({}, { message: 'Lutfen gecerli bir email adresi giriniz!' })
  email: string;

  @IsNotEmpty({ message: 'Sifre bos gecilemez!' })
  passwordHash: string;
}
