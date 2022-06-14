import { ApiProperty } from "@nestjs/swagger";

export class CreateDisciplineDto {
  @ApiProperty({ example: "История", description: "Название дисциплины" })
  readonly value: string;
}
