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

interface TeacherPlanCreationAttrs {
  disciplineId: number;
  teacherId: number;
  groupId: number;
}
@Table({ tableName: "teacherPlan" })
export class TeacherPlan extends Model<TeacherPlan, TeacherPlanCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "1",
    description: "ID дисциплины",
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  disciplineId: number;

  @ApiProperty({
    example: "1",
    description: "ID препподователя",
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  teacherId: number;

  @ApiProperty({
    example: "1",
    description: "ID группы",
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  groupId: number;
}
