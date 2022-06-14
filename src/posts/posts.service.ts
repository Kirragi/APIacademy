import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "src/files/files.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./posts.model";
import { searchPostDto } from "./dto/seaarchPost.dto";
@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }

  async getAllPosts() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
    });
    return posts;
  }

  async getPostOne(dto: searchPostDto) {
    const posts = await this.postRepository.findAll({
      where: { id: dto.searchId },
    });
    return posts;
  }
}