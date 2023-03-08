import { IsInt, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  readonly age?: number;

  @MinLength(3)
  @IsString()
  @IsOptional()
  readonly color?: string;

  @IsString()
  @IsOptional()
  readonly breed?: string;
}
