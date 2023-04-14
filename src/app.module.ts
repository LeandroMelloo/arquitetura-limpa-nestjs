import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from '../nest-arquitetura-hexagonal/src/list/list.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from '../nest-arquitetura-hexagonal/src/list/entities/list.entity';

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
