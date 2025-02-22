import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
 
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => String(value).toLowerCase().trim())
  email: string;

 
  @MinLength(6)
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;

  
  @IsNotEmpty()
  @Transform(({ value }) => String(value).trim())
  firstName: string;

  
  @IsNotEmpty()
  @Transform(({ value }) => String(value).trim())
  lastName: string;

  
}