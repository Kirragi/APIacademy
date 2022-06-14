import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "Kirragi", description: "NAME" })
  @IsString({ message: "должно быть строкой" })
  @Length(3, 16, { message: "Не меньше 3 и не больше 16" })
  readonly name: string;

  @ApiProperty({ example: "kirrg@mail.ru", description: "EMAIL" })
  @IsString({ message: "должно быть строкой" })
  @IsEmail({}, { message: "Не корректный email" })
  readonly email: string;

  @ApiProperty({ example: "krytoi123", description: "PASSWORD" })
  @IsString({ message: "должно быть строкой" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  readonly password: string;
}
