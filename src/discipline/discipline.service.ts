import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Discipline } from "./discipline.model";
import { CreateDisciplineDto } from "./dto/discipline.dto";
import { searchDisciplineDto } from "./dto/searchDiscipline.dto";

@Injectable()
export class DisciplineService {
  constructor(
    @InjectModel(Discipline) private disciplineRepository: typeof Discipline
  ) {}

  async createDiscipline(Dto: CreateDisciplineDto) {
    const discipline = await this.disciplineRepository.create(Dto);
    return discipline;
  }

  async getAllDiscipline() {
    const discipline = await this.disciplineRepository.findAll({
      include: { all: true },
    });
    return discipline;
  }

  async getDisciplineOne(dto: searchDisciplineDto) {
    const discipline = await this.disciplineRepository.findAll({
      where: { id: dto.searchId },
    });
    return discipline;
  }
}
