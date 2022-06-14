import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "User", description: "ROLE" })
  readonly value: string;
  @ApiProperty({ example: "Пользователь", description: "Опписание роли" })
  readonly description: string;
}
