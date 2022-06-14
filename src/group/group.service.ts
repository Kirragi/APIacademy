import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Group } from "./group.model";
import { CreateGroupDto } from "./dto/group.dto";
import { searchGroupDto } from "./dto/search-group.dto";

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group) private GroupRepository: typeof Group) {}

  async createGroup(Dto: CreateGroupDto) {
    const group = await this.GroupRepository.create(Dto);
    return group;
  }

  async getAllGroup() {
    const group = await this.GroupRepository.findAll({
      include: { all: true },
    });
    return group;
  }

  async getGroupOne(dto: searchGroupDto) {
    const group = await this.GroupRepository.findAll({
      where: { id: dto.searchId },
    });
    return group;
  }
}
