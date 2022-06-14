import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { getReviewSearchDto } from "./dto/getReviewsPost.dto";
import { CreateReviewDto } from "./dto/review.dto";
import { Review } from "./review.model";

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review) private reviewRepository: typeof Review) {}
  async createReview(Dto: CreateReviewDto) {
    const review = await this.reviewRepository.create(Dto);
    return review;
  }

  async getAllReview() {
    const review = await this.reviewRepository.findAll({
      include: { all: true },
    });
    return review;
  }
  async getPostReviews(dto: getReviewSearchDto) {
    const review = await this.reviewRepository.findAll({
      where: { postId: dto.searchId },
    });
    return review;
  }
  async deleteReview(id: number) {
    const review = await this.reviewRepository.destroy({ where: { id } });
    return review;
  }
}
