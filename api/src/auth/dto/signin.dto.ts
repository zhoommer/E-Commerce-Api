import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail({}, { message: 'Gecerli bir email adresi girmediniz!' })
  email?: string;

  @IsNotEmpty({ message: 'Sifre bos gecilemez!' })
  @IsString()
  passwordHash: string;
}
