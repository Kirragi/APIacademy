import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  name: string;
  email: string;
  password: string;
}
@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Kirragi", description: "NAME" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "kirrg@mail.ru", description: "EMAIL" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "krytoi123", description: "PASSWORD" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "1", description: "ID группы" })
  @Column({ type: DataType.INTEGER, allowNull: true })
  group: number;

  @ApiProperty({ example: "true", description: "BAN ?" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: "за оскорбление", description: "Причина бана" })
  @Column({ type: DataType.STRING, allowNull: true })
  baanReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
