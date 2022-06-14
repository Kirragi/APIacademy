import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: "Title", description: "Заголовок новости" })
  readonly title: string;

  @ApiProperty({ example: "Content post", description: "Описание ппоста" })
  readonly content: string;

  @ApiProperty({ example: "1", description: "Id автора" })
  readonly userId: number;
}
