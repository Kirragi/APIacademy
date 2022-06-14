import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SearchUserDto {
  @ApiProperty({ example: "6", description: "ID " })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly searchId: number;
}
