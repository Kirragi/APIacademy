import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Group } from "./group.model";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/group.dto";
import { searchGroupDto } from "./dto/search-group.dto";

@ApiTags("Group")
@Controller("Group")
export class GroupController {
  constructor(private GroupService: GroupService) {}

  @ApiOperation({ summary: "Создание группы" })
  @ApiResponse({ status: 200, type: Group })
  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.GroupService.createGroup(dto);
  }

  @ApiOperation({ summary: "Получение всех групп" })
  @ApiResponse({ status: 200, type: Group })
  @Get()
  getAll() {
    return this.GroupService.getAllGroup();
  }

  @ApiOperation({ summary: "Получение группы по id" })
  @Post("/One")
  getGroupOne(@Body() dto: searchGroupDto) {
    return this.GroupService.getGroupOne(dto);
  }
}
