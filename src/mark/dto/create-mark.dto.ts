import { ApiProperty } from "@nestjs/swagger";

export class CreateMarkDto {
  @ApiProperty({ example: "5", description: "Оценка" })
  readonly value: number;

  @ApiProperty({ example: "1", description: "ID преподавателя" })
  readonly teacherId: number;

  @ApiProperty({ example: "1", description: "ID студента" })
  readonly studentId: number;

  @ApiProperty({ example: "1", description: "ID группы" })
  readonly groupId: number;

  @ApiProperty({ example: "1", description: "ID задания" })
  readonly exerciseId: number;

  @ApiProperty({ example: "1", description: "ID дисциплины" })
  readonly disciplineId: number;
}
