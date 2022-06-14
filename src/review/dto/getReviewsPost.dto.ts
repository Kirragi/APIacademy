import { ApiProperty } from "@nestjs/swagger";

export class getReviewSearchDto {
  @ApiProperty({ example: "1", description: "Id" })
  readonly searchId: number;
}
