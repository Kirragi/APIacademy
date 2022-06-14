import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerExerciseDto {
  @ApiProperty({ example: "Content post", description: "Описание ппоста" })
  readonly content: string;

  @ApiProperty({ example: "1", description: "ID автора" })
  readonly studentId: number;

  @ApiProperty({ example: "1", description: "ID задания" })
  readonly exerciseId: number;
}
