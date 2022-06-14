import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "src/files/files.service";
import { AnswerExercise } from "./answer-exercise.model";
import { CreateAnswerExerciseDto } from "./dto/create-answer-exercise.dto";
import { searchAnswerExerciseDto } from "./dto/seaarch-answer-exercise.dto";
import { setAnswerMarktDto } from "./dto/set-answer-mark.dto";
@Injectable()
export class AnswerExerciseService {
  constructor(
    @InjectModel(AnswerExercise)
    private AnswerExerciseRepository: typeof AnswerExercise,
    private fileService: FilesService
  ) {}

  async create(dto: CreateAnswerExerciseDto, file: any) {
    const fileName = await this.fileService.createFile(file);
    const answer = await this.AnswerExerciseRepository.create({
      ...dto,
      file: fileName,
    });
    return answer;
  }

  async getAllAnswer() {
    const answer = await this.AnswerExerciseRepository.findAll({
      include: { all: true },
    });
    return answer;
  }

  async getAnswerOne(dto: searchAnswerExerciseDto) {
    const answer = await this.AnswerExerciseRepository.findAll({
      where: { id: dto.searchId },
    });
    return answer;
  }

  async getAnswerExercise(dto: searchAnswerExerciseDto) {
    const answer = await this.AnswerExerciseRepository.findAll({
      where: { exerciseId: dto.searchId },
    });
    return answer;
  }

  async getAnswerStudent(dto: searchAnswerExerciseDto) {
    const answer = await this.AnswerExerciseRepository.findAll({
      where: { studentId: dto.searchId },
    });
    return answer;
  }

  async setAnswerMark(dto: setAnswerMarktDto) {
    const id = dto.answerId;
    const answer = await this.AnswerExerciseRepository.findOne({
      where: { id },
    });
    if (answer) {
      await answer.set({ ...answer, markId: dto.value });
      await answer.save();
      return answer;
    }
    throw new HttpException("Товар не найден", HttpStatus.NOT_FOUND);
  }
}
