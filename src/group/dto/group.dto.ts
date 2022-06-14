import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {
  @ApiProperty({ example: "ИС428", description: "Группа" })
  readonly value: string;
}
