import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { getReviewSearchDto } from "./dto/getReviewsPost.dto";
import { CreateReviewDto } from "./dto/review.dto";
import { Review } from "./review.model";
import { ReviewService } from "./review.service";

@ApiTags("Review")
@Controller("review")
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @ApiOperation({ summary: "Создание коментария" })
  @ApiResponse({ status: 200, type: Review })
  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.createReview(dto);
  }

  @ApiOperation({ summary: "Получение всех коментарии" })
  @ApiResponse({ status: 200, type: Review })
  @Get()
  getAll() {
    return this.reviewService.getAllReview();
  }
  @ApiOperation({ summary: "Получение всех коментарий к новости" })
  @ApiResponse({ status: 200, type: Review })
  @Post("/post")
  getAllReviewsPost(@Body() dto: getReviewSearchDto) {
    return this.reviewService.getPostReviews(dto);
  }

  @ApiOperation({ summary: "Удаление коментария" })
  @Delete("/:id")
  deletRole(@Param("id") id: number) {
    return this.reviewService.deleteReview(id);
  }
}
