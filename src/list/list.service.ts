import { Body, Injectable, Post } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/sequelize';
import { List } from './entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List)
    private listModel: typeof List,
  ) {}

  // DTO -> Data Transfer Object ou Objeto de Transfêrencia de Dados
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(@Body() createListDto: CreateListDto) {
    return this.listModel.create(createListDto);
  }

  findAll() {
    return this.listModel.findAll();
  }

  async findOne(id: number) {
    const list = await this.listModel.findByPk(id);

    if (!list) {
      throw new Error('List not found');
    }
    return list;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
