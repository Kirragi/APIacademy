import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { searchTeacherPlanDto } from "./dto/search-teacher-plan.dto";
import { CreaateTeacherPlanDto } from "./dto/teacher-plan.dto";
import { TeacherPlan } from "./teacher-plan.model";
import { TeacherPlanService } from "./teacher-plan.service";

@ApiTags("Teacher-plan")
@Controller("teacher-plan")
export class TeacherPlanController {
  constructor(private TeacherPlanService: TeacherPlanService) {}

  @ApiOperation({ summary: "Создание плана преподователя" })
  @ApiResponse({ status: 200, type: TeacherPlan })
  @Post()
  create(@Body() dto: CreaateTeacherPlanDto) {
    return this.TeacherPlanService.createTeacherPlan(dto);
  }

  @ApiOperation({ summary: "Получение всех планов преподователей" })
  @ApiResponse({ status: 200, type: TeacherPlan })
  @Get()
  getAll() {
    return this.TeacherPlanService.getAllTeacherPlan();
  }

  @ApiOperation({ summary: "Получение плана преподователя по id" })
  @Post("/One")
  getTeacherPlanOne(@Body() dto: searchTeacherPlanDto) {
    return this.TeacherPlanService.getTeacherPlanOne(dto);
  }
}
