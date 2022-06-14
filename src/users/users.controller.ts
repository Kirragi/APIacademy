import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { ChengeGroupDto } from "./dto/chenge-group.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { SearchUserDto } from "./dto/searchUserId.dto";
import { searchUsersGroupDto } from "./dto/searchUsersGroup.dto";
import { User } from "./users.model";
import { UsersService } from "./users.service";
//описание запросов к таблице users
@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiOperation({ summary: "Создание ппользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  @ApiOperation({ summary: "Получение ппользователей" })
  @ApiResponse({ status: 200, type: [User] })
  //   @UseGuards(JwtAuthGuard)
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUser();
  }

  @ApiOperation({ summary: "Получение пользователей без групппы" })
  @ApiResponse({ status: 200, type: [User] })
  @Get("/UsersNoGroup")
  getUsersNoGroup() {
    return this.usersService.getUsersNoGroup();
  }

  @ApiOperation({ summary: "Получение пользователя по id" })
  @Post("/One")
  getPostOne(@Body() dto: SearchUserDto) {
    return this.usersService.getUserOne(dto);
  }

  @ApiOperation({ summary: "Выдать роль" })
  @ApiResponse({ status: 200 })
  //ограничение к заппросу (только для роли ADMIN)
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: "Бан ппользователя" })
  @ApiResponse({ status: 200 })
  //   @UseGuards(JwtAuthGuard)
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Post("/ban")
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @ApiOperation({ summary: "Изменить группу" })
  @ApiResponse({ status: 200 })
  @Post("/setGroup")
  setGroup(@Body() dto: ChengeGroupDto) {
    return this.usersService.setGroup(dto);
  }

  @ApiOperation({ summary: "Получение всех учеников группы" })
  @Post("/allUsersGroup")
  getAllUsersGroup(@Body() dto: searchUsersGroupDto) {
    return this.usersService.getAllUsersGroup(dto);
  }
}
