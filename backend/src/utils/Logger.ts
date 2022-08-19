import { ConsoleLogger } from '@nestjs/common'
import { LogLevel } from '@nestjs/common/services/logger.service'

export class ApmLogger extends ConsoleLogger {
  protected printMessages(messages: unknown[], context?: string, logLevel?: LogLevel, writeStreamType?: 'stdout' | 'stderr') {
    // console.log({ messages, context, logLevel, writeStreamType })
    super.printMessages(messages, context, logLevel, writeStreamType)
  }
}
