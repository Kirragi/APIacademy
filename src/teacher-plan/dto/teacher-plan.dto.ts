import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
export class CreaateTeacherPlanDto {
  @ApiProperty({ example: "1", description: "ID дисциплины" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly disciplineId: number;

  @ApiProperty({ example: "2", description: "ID препподователя" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly teacherId: number;

  @ApiProperty({ example: "3", description: "ID группы" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly groupId: number;
}
