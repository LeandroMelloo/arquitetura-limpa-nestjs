import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { ListModule } from './list/list.module'
import { List } from './list/entities/list.entity'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'

@Module({
  imports: [
    ListModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      autoLoadModels: true,
      models: [List],
    }),
    EnvConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
