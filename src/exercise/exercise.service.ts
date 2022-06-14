import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "src/files/files.service";
import { CreateExerciseDto } from "./dto/create-exercise.dto";
import { searchExerciseDto } from "./dto/seaarch-exercise.dto";
import { Exercise } from "./exercise.model";
@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(Exercise) private exerciseRepository: typeof Exercise,
    private fileService: FilesService
  ) {}

  async create(dto: CreateExerciseDto, file: any) {
    const fileName = await this.fileService.createFile(file);
    const exercise = await this.exerciseRepository.create({
      ...dto,
      file: fileName,
    });
    return exercise;
  }

  async getAllExercise() {
    const exercise = await this.exerciseRepository.findAll({
      include: { all: true },
    });
    return exercise;
  }

  async getExerciseOne(dto: searchExerciseDto) {
    const exercise = await this.exerciseRepository.findAll({
      where: { id: dto.searchId },
    });
    return exercise;
  }

  async getExerciseGroup(dto: searchExerciseDto) {
    const exercise = await this.exerciseRepository.findAll({
      where: { groupId: dto.searchId },
    });
    return exercise;
  }

  async getExerciseDiscipline(dto: searchExerciseDto) {
    const exercise = await this.exerciseRepository.findAll({
      where: { disciplineId: dto.searchId },
    });
    return exercise;
  }
}
