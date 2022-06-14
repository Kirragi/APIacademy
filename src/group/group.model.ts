import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Post } from "src/posts/posts.model";

interface GroupCreationAttrs {
  value: string;
}
@Table({ tableName: "group" })
export class Group extends Model<Group, GroupCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Техника",
    description: "Категория",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;
}
