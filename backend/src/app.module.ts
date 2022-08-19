import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { SandboxModule } from './sandbox/sandbox.module'
import { PeopleModule } from './people/people.module'
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { ConfigModule } from '@nestjs/config'
import { dbConfigObj } from './config/db.config'
import { MockSmsModule } from './mock-sms/mock-sms.module'
import { UsersModule } from './users/users.module'
import { ScheduleModule } from '@nestjs/schedule'
import { CronJobsModule } from './cron-jobs/cron-jobs.module'
import { MikroOrmModule } from '@mikro-orm/nestjs'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        dbConfigObj,
      ]
    }),
    MikroOrmModule.forRoot(),
    ScheduleModule.forRoot(),
    SandboxModule,
    PeopleModule,
    MockSmsModule,
    UsersModule,
    CronJobsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
