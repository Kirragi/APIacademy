import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";

interface MarkCreationAttrs {
  value: number;
  teacherId: number;
  studentId: number;
  groupId: number;
  exerciseId: number;
  disciplineId: number;
}

@Table({ tableName: "mark" })
export class Mark extends Model<Mark, MarkCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "5", description: "Оценка" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  value: number;

  @ApiProperty({ example: "1", description: "ID преподавателя" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  teacherId: number;

  @ApiProperty({ example: "1", description: "ID студента" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  studentId: number;

  @ApiProperty({ example: "1", description: "ID группы" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  groupId: number;

  @ApiProperty({ example: "1", description: "ID задания" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  exerciseId: number;

  @ApiProperty({ example: "1", description: "ID дисциплины" })
  @Column({ type: DataType.INTEGER, allowNull: false })
  disciplineId: number;
}
