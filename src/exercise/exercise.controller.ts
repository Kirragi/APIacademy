import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ExerciseService } from "./exercise.service";
import { CreateExerciseDto } from "./dto/create-exercise.dto";
import { searchExerciseDto } from "./dto/seaarch-exercise.dto";

@ApiTags("Exercise")
@Controller("exercise")
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}
  @ApiOperation({ summary: "Создание задания" })
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  createExercise(@Body() dto: CreateExerciseDto, @UploadedFile() file) {
    return this.exerciseService.create(dto, file);
  }

  @ApiOperation({ summary: "Получение задания по id" })
  @Post("/One")
  getExerciseOne(@Body() dto: searchExerciseDto) {
    return this.exerciseService.getExerciseOne(dto);
  }

  @ApiOperation({ summary: "Получение всех заданий" })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.exerciseService.getAllExercise();
  }

  @ApiOperation({ summary: "Получение заданий по id группы" })
  @Post("/Group")
  getExerciseGroup(@Body() dto: searchExerciseDto) {
    return this.exerciseService.getExerciseGroup(dto);
  }

  @ApiOperation({ summary: "Получение заданий по id дисциплинны" })
  @Post("/Discipline")
  getExerciseDiscipline(@Body() dto: searchExerciseDto) {
    return this.exerciseService.getExerciseDiscipline(dto);
  }
}
