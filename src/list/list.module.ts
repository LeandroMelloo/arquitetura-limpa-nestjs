import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './entities/list.entity';

@Module({
  imports: [SequelizeModule.forFeature([List])],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
