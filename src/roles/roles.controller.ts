import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";
////описание запросов к таблице roles
@ApiTags("Role")
@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: "Создание роли" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: "Получение роли" })
  @ApiResponse({ status: 200, type: Role })
  @Get("/:value")
  getByValuse(@Param("value") value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({ summary: "Удаление роли" })
  @Delete("/:id")
  deletRole(@Param("id") id: number) {
    return this.rolesService.deleteRole(id);
  }
}
