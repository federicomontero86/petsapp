import { IsEmail, IsString } from 'class-validator';

export class CreateUsersDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}
