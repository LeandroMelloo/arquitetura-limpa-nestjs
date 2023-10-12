import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { ListModule } from './list/list.module'
import { List } from './list/entities/list.entity'

@Module({
  imports: [
    ListModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      autoLoadModels: true,
      models: [List],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
