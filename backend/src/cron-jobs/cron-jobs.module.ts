import { Module } from '@nestjs/common'
import { SimpleCronService } from './simple-cron.service';

@Module({
  providers: [SimpleCronService]
})
export class CronJobsModule {
}
