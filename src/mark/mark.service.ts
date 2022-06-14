import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMarkDto } from "./dto/create-mark.dto";
import { searchMarkDto } from "./dto/search-mark.dto";
import { Mark } from "./mark.model";

@Injectable()
export class MarkService {
  constructor(@InjectModel(Mark) private MarkRepository: typeof Mark) {}
  async createMark(Dto: CreateMarkDto) {
    const mark = await this.MarkRepository.create(Dto);
    return mark;
  }

  async getAllMark() {
    const mark = await this.MarkRepository.findAll({
      include: { all: true },
    });
    return mark;
  }

  async getMarkOne(dto: searchMarkDto) {
    const mark = await this.MarkRepository.findAll({
      where: { id: dto.searchId },
    });
    return mark;
  }

  async getMarkExercise(dto: searchMarkDto) {
    const mark = await this.MarkRepository.findAll({
      where: { exerciseId: dto.searchId },
    });
    return mark;
  }

  async getMarkDiscipline(dto: searchMarkDto) {
    const mark = await this.MarkRepository.findAll({
      where: { disciplineId: dto.searchId },
    });
    return mark;
  }

  async getMarkStudent(dto: searchMarkDto) {
    const mark = await this.MarkRepository.findAll({
      where: { studentId: dto.searchId },
    });
    return mark;
  }
}
