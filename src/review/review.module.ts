import { Module } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";
import { Review } from "./review.model";
import { User } from "src/users/users.model";
import { Post } from "src/posts/posts.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  providers: [ReviewService],
  controllers: [ReviewController],
  imports: [SequelizeModule.forFeature([Review, User, Post])],
  exports: [ReviewService],
})
export class ReviewModule {}
