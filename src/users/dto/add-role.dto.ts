import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: "USER", description: "Роль" })
  @IsString({ message: "должно быть строкой" })
  readonly value: string;
  @ApiProperty({ example: "6", description: "ID пользователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly userId: number;
}
