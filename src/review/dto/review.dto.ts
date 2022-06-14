import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty({ example: "Text", description: "Text comment" })
  readonly comment: string;

  @ApiProperty({ example: "1", description: "Id пользователя" })
  readonly userId: number;
  @ApiProperty({ example: "1", description: "Id товара" })
  readonly postId: number;
}
