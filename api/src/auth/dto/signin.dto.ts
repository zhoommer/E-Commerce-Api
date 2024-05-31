import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class SignInDto {
  @IsEmail({}, { message: 'Gecerli bir email adresi girmediniz!' })
  email?: string;

  @IsString()
  @Min(10, { message: 'Telefon numarasi 10 haneli olusmalidir' })
  @Max(10, { message: 'Telefon numarasi 10 haneli olusmalidir' })
  @IsPhoneNumber('TR')
  phone?: string;

  @IsString()
  username?: string;

  @IsNotEmpty({ message: 'Sifre bos gecilemez!' })
  @IsString()
  passwordHash: string;
}
