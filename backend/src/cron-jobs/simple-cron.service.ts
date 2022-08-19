import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import { applyMixins } from '../utils/mixins'
import { HasLogger } from '../mixins/has-logger.mixin'

@Injectable()
export class SimpleCronService {
  logLabel = 'simple-cron'

  @Cron('*/15 * * * *', { name: 'simple-cron' })
  handleCron() {
    this.logger.debug('Called at ' + new Date)
  }
}

applyMixins(SimpleCronService, [HasLogger])

export interface SimpleCronService extends HasLogger {
}
