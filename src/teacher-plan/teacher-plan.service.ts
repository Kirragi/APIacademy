import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { searchTeacherPlanDto } from "./dto/search-teacher-plan.dto";
import { CreaateTeacherPlanDto } from "./dto/teacher-plan.dto";
import { TeacherPlan } from "./teacher-plan.model";

@Injectable()
export class TeacherPlanService {
  constructor(
    @InjectModel(TeacherPlan) private TeacherPlanRepository: typeof TeacherPlan
  ) {}

  async createTeacherPlan(Dto: CreaateTeacherPlanDto) {
    const teacherPlan = await this.TeacherPlanRepository.create(Dto);
    return teacherPlan;
  }

  async getAllTeacherPlan() {
    const teacherPlan = await this.TeacherPlanRepository.findAll({
      include: { all: true },
    });
    return teacherPlan;
  }

  async getTeacherPlanOne(dto: searchTeacherPlanDto) {
    const teacherPlan = await this.TeacherPlanRepository.findAll({
      where: { id: dto.searchId },
    });
    return teacherPlan;
  }
}
