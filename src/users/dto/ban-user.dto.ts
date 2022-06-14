import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "6", description: "ID пользователя" })
  readonly userId: number;

  @ApiProperty({ example: "Хулиганство", description: "Причина бана" })
  readonly baanReason: string;
}
