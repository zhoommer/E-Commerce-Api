import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty({ message: 'Email bos gecilemez!' })
  @IsEmail({}, { message: 'Lutfen gecerli bir email adresi giriniz!' })
  email: string;

  @IsString()
  gender?: string;

  @IsNotEmpty({ message: 'Sifre bos gecilemez!' })
  passwordHash: string;
}
