import { Module } from "@nestjs/common";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";
import { Exercise } from "./exercise.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { FilesModule } from "src/files/files.module";

@Module({
  providers: [ExerciseService],
  controllers: [ExerciseController],
  imports: [SequelizeModule.forFeature([Exercise]), FilesModule],
})
export class ExerciseModule {}
