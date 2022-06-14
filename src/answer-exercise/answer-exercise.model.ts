import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface AnswerExerciseCreationAttrs {
  content: string;
  studentId: number;
  file: string;
  exerciseId: number;
}

@Table({ tableName: "answer-exercise" })
export class AnswerExercise extends Model<
  AnswerExercise,
  AnswerExerciseCreationAttrs
> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Описание задания", description: "Описание задания" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "img.png", description: "Имя файла" })
  @Column({ type: DataType.STRING })
  file: string;

  @ApiProperty({ example: "1", description: "ID автора" })
  @Column({ type: DataType.INTEGER })
  studentId: number;

  @ApiProperty({ example: "1", description: "ID задания" })
  @Column({ type: DataType.INTEGER })
  exerciseId: number;

  @ApiProperty({ example: "1", description: "ID оценки" })
  @Column({ type: DataType.INTEGER, allowNull: true })
  markId: number;
}
