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

interface DisciplineCreationAttrs {
  value: string;
}
@Table({ tableName: "discipline" })
export class Discipline extends Model<Discipline, DisciplineCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "История",
    description: "Discipline",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;
}
