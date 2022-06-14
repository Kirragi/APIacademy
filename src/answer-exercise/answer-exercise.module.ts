import { Module } from "@nestjs/common";
import { AnswerExerciseService } from "./answer-exercise.service";
import { AnswerExerciseController } from "./answer-exercise.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { FilesModule } from "src/files/files.module";
import { AnswerExercise } from "./answer-exercise.model";

@Module({
  providers: [AnswerExerciseService],
  controllers: [AnswerExerciseController],
  imports: [SequelizeModule.forFeature([AnswerExercise]), FilesModule],
})
export class AnswerExerciseModule {}
