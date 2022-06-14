import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Post } from "src/posts/posts.model";
import { GroupController } from "./group.controller";
import { Group } from "./group.model";
import { GroupService } from "./group.service";

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [SequelizeModule.forFeature([Group, Post])],
  exports: [GroupService],
})
export class GroupModule {}
