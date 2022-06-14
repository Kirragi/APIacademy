import { ApiProperty } from "@nestjs/swagger";

export class CreateExerciseDto {
  @ApiProperty({ example: "Title", description: "Заголовок новости" })
  readonly title: string;

  @ApiProperty({ example: "Content post", description: "Описание ппоста" })
  readonly content: string;

  @ApiProperty({ example: "1", description: "ID автора" })
  readonly userId: number;

  @ApiProperty({ example: "1", description: "ID группы" })
  readonly groupId: number;

  @ApiProperty({ example: "1", description: "ID дисциплины" })
  readonly disciplineId: number;
}
