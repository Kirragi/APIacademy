import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface ExerciseCreationAttrs {
  title: string;
  content: string;
  userId: number;
  file: string;
  groupId: number;
  disciplineId: number;
}

@Table({ tableName: "exercise" })
export class Exercise extends Model<Exercise, ExerciseCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Заголовок", description: "Заголовок задания" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: "Описание задания", description: "Описание задания" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "img.png", description: "Имя файла" })
  @Column({ type: DataType.STRING })
  file: string;

  @ApiProperty({ example: "1", description: "ID автора" })
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: "1", description: "ID группы" })
  @Column({ type: DataType.INTEGER })
  groupId: number;

  @ApiProperty({ example: "1", description: "ID дисциплины" })
  @Column({ type: DataType.INTEGER })
  disciplineId: number;
}
