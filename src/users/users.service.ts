import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { ChengeGroupDto } from "./dto/chenge-group.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { SearchUserDto } from "./dto/searchUserId.dto";
import { searchUsersGroupDto } from "./dto/searchUsersGroup.dto";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}
  //функция создания пользователя
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }
  //функция получения всех пользователей
  async getAllUser() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
  //функция получения пользователя по email
  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }
  //функция назначения роли пользователю
  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add("role", role.id);
      return dto;
    }
    throw new HttpException(
      "Пользователь или роль не найдены",
      HttpStatus.NOT_FOUND
    );
  }
  //функция бана пользователя
  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.baanReason = dto.baanReason;
    await user.save();
    return user;
  }

  async setGroup(dto: ChengeGroupDto) {
    const id = dto.userId;
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      await user.set({ ...user, group: dto.value });
      await user.save();
      return user;
    }
    throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
  }

  async getAllUsersGroup(dto: searchUsersGroupDto) {
    const user = await this.userRepository.findAll({
      where: { group: dto.group },
    });
    return user;
  }

  async getUsersNoGroup() {
    const user = await this.userRepository.findAll({
      where: { group: null },
    });
    return user;
  }

  async getUserOne(dto: SearchUserDto) {
    const user = await this.userRepository.findAll({
      where: { id: dto.searchId },
    });
    return user;
  }
}
