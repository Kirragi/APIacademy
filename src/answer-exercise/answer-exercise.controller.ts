import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnswerExerciseService } from "./answer-exercise.service";
import { CreateAnswerExerciseDto } from "./dto/create-answer-exercise.dto";
import { searchAnswerExerciseDto } from "./dto/seaarch-answer-exercise.dto";
import { setAnswerMarktDto } from "./dto/set-answer-mark.dto";
@ApiTags("Answer-exercise")
@Controller("answer-exercise")
export class AnswerExerciseController {
  constructor(private answerExerciseService: AnswerExerciseService) {}
  @ApiOperation({ summary: "Создание ответа" })
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  createAnswer(@Body() dto: CreateAnswerExerciseDto, @UploadedFile() file) {
    return this.answerExerciseService.create(dto, file);
  }

  @ApiOperation({ summary: "Получение всех заданий" })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.answerExerciseService.getAllAnswer();
  }

  @ApiOperation({ summary: "Получение задания по id" })
  @Post("/One")
  getExerciseOne(@Body() dto: searchAnswerExerciseDto) {
    return this.answerExerciseService.getAnswerOne(dto);
  }

  @ApiOperation({ summary: "Получение всех ответов по id задания" })
  @Post("/Exercise")
  getAnswerExercise(@Body() dto: searchAnswerExerciseDto) {
    return this.answerExerciseService.getAnswerExercise(dto);
  }

  @ApiOperation({ summary: "Получение всех ответов по id студента" })
  @Post("/Student")
  getAnswerStudent(@Body() dto: searchAnswerExerciseDto) {
    return this.answerExerciseService.getAnswerStudent(dto);
  }

  @ApiOperation({ summary: "Присвоить оценку" })
  @ApiResponse({ status: 200 })
  @Post("/SetMark")
  addMarks(@Body() dto: setAnswerMarktDto) {
    return this.answerExerciseService.setAnswerMark(dto);
  }
}
