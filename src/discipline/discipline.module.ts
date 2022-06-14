import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "src/posts/posts.model";
import { DisciplineController } from "./discipline.controller";
import { Discipline } from "./discipline.model";
import { DisciplineService } from "./discipline.service";

@Module({
  controllers: [DisciplineController],
  providers: [DisciplineService],
  imports: [SequelizeModule.forFeature([Discipline, Post])],
  exports: [DisciplineService],
})
export class DisciplineModule {}
