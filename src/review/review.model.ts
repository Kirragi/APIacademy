import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";

interface ReviewCreationAttrs {
  comment: string;
  userId: number;
  postId: number;
}

@Table({ tableName: "review" })
export class Review extends Model<Review, ReviewCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Контент новости", description: "Текст новости" })
  @Column({ type: DataType.STRING, allowNull: false })
  comment: string;

  @ApiProperty({ example: "1", description: "ID специальной метки" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ApiProperty({ example: "1", description: "ID специальной метки" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  postId: number;
}
