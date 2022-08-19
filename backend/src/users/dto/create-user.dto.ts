import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'Please provide and email' })
  email: string

  @IsNotEmpty()
  @MinLength(4)
  password: string

  @IsNotEmpty()
  @MaxLength(100)
  name: string
}
