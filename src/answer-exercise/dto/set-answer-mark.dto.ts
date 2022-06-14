import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class setAnswerMarktDto {
  @ApiProperty({ example: "6", description: "ID оценки" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly value: number;
  @ApiProperty({ example: "6", description: "ID ответа" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly answerId: number;
}
