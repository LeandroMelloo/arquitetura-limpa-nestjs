import { Module } from '@nestjs/common'
import { ListService } from './list.service'
import { ListController } from './list.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { List } from './entities/list.entity'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    SequelizeModule.forFeature([List]),
    HttpModule.register({
      baseURL: 'http://localhost:8000',
    }),
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
