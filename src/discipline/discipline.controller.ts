import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Discipline } from "./discipline.model";
import { DisciplineService } from "./discipline.service";
import { CreateDisciplineDto } from "./dto/discipline.dto";
import { searchDisciplineDto } from "./dto/searchDiscipline.dto";

@ApiTags("Discipline")
@Controller("discipline")
export class DisciplineController {
  constructor(private disciplineService: DisciplineService) {}

  @ApiOperation({ summary: "Создание дисциплины" })
  @ApiResponse({ status: 200, type: Discipline })
  @Post()
  create(@Body() dto: CreateDisciplineDto) {
    return this.disciplineService.createDiscipline(dto);
  }

  @ApiOperation({ summary: "Получение всех дисциплин" })
  @ApiResponse({ status: 200, type: Discipline })
  @Get()
  getAll() {
    return this.disciplineService.getAllDiscipline();
  }

  @ApiOperation({ summary: "Получение дисциплину по id" })
  @Post("/One")
  getPostOne(@Body() dto: searchDisciplineDto) {
    return this.disciplineService.getDisciplineOne(dto);
  }
}
