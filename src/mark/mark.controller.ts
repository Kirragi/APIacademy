import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateMarkDto } from "./dto/create-mark.dto";
import { searchMarkDto } from "./dto/search-mark.dto";
import { Mark } from "./mark.model";
import { MarkService } from "./mark.service";

@ApiTags("Mark")
@Controller("mark")
export class MarkController {
  constructor(private markService: MarkService) {}

  @ApiOperation({ summary: "Создание оценки" })
  @ApiResponse({ status: 200, type: Mark })
  @Post()
  create(@Body() dto: CreateMarkDto) {
    return this.markService.createMark(dto);
  }

  @ApiOperation({ summary: "Получение оценки по id" })
  @ApiResponse({ status: 200, type: Mark })
  @Post("/One")
  getMarkOne(@Body() dto: searchMarkDto) {
    return this.markService.getMarkOne(dto);
  }

  @ApiOperation({ summary: "Получение всех оценок" })
  @ApiResponse({ status: 200, type: Mark })
  @Get()
  getAll() {
    return this.markService.getAllMark();
  }

  @ApiOperation({ summary: "Получение оценкок по id задания" })
  @ApiResponse({ status: 200, type: Mark })
  @Post("/Exercise")
  getMarkExercise(@Body() dto: searchMarkDto) {
    return this.markService.getMarkExercise(dto);
  }

  @ApiOperation({ summary: "Получение оценкок по id ппредмета" })
  @ApiResponse({ status: 200, type: Mark })
  @Post("/Discipline")
  getMarkDiscipline(@Body() dto: searchMarkDto) {
    return this.markService.getMarkDiscipline(dto);
  }

  @ApiOperation({ summary: "Получение оценкок по id студента" })
  @ApiResponse({ status: 200, type: Mark })
  @Post("/Student")
  getMarkStudent(@Body() dto: searchMarkDto) {
    return this.markService.getMarkStudent(dto);
  }
}
