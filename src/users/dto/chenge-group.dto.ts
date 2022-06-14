import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ChengeGroupDto {
  @ApiProperty({ example: "6", description: "ID Группы" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly value: number;
  @ApiProperty({ example: "6", description: "ID пользователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly userId: number;
}
