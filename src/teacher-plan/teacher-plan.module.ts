import { Module } from "@nestjs/common";
import { TeacherPlanService } from "./teacher-plan.service";
import { TeacherPlanController } from "./teacher-plan.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { TeacherPlan } from "./teacher-plan.model";
@Module({
  providers: [TeacherPlanService],
  controllers: [TeacherPlanController],
  imports: [SequelizeModule.forFeature([TeacherPlan])],
  exports: [TeacherPlanService],
})
export class TeacherPlanModule {}
