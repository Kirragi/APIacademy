import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { Post } from "./posts/posts.model";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { Review } from "./review/review.model";
import { ReviewModule } from "./review/review.module";
import { Discipline } from "./discipline/discipline.model";
import { DisciplineModule } from "./discipline/discipline.module";
import { Group } from "./group/group.model";
import { GroupModule } from "./group/group.module";
import { TeacherPlanModule } from "./teacher-plan/teacher-plan.module";
import { TeacherPlan } from "./teacher-plan/teacher-plan.model";
import { ExerciseModule } from "./exercise/exercise.module";
import { Exercise } from "./exercise/exercise.model";
import { AnswerExerciseModule } from "./answer-exercise/answer-exercise.module";
import { AnswerExercise } from "./answer-exercise/answer-exercise.model";
import { MarkModule } from "./mark/mark.module";
import { Mark } from "./mark/mark.model";
@Module({
  controllers: [],
  providers: [],
  imports: [
    //импорт env файла
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    //импорт модуля для сохранения загруженных файлов
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    //импорт и настройка модуля для подключения к БД
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Post,
        Review,
        Discipline,
        Group,
        TeacherPlan,
        Exercise,
        AnswerExercise,
        Mark,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    ReviewModule,
    DisciplineModule,
    GroupModule,
    TeacherPlanModule,
    ExerciseModule,
    AnswerExerciseModule,
    MarkModule,
  ],
})
export class AppModule {}
