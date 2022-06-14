import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { searchPostDto } from "./dto/seaarchPost.dto";
@ApiTags("Post")
@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}
  @ApiOperation({ summary: "Создание новости" })
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.create(dto, image);
  }

  @ApiOperation({ summary: "Получение новости по id" })
  @Post("/One")
  getPostOne(@Body() dto: searchPostDto) {
    return this.postsService.getPostOne(dto);
  }

  @ApiOperation({ summary: "Получение всех новостей" })
  @ApiResponse({ status: 200 })
  @Get()
  getAll() {
    return this.postsService.getAllPosts();
  }
}
