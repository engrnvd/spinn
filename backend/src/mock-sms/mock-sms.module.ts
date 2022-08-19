import { Module } from '@nestjs/common'
import { MockSmsService } from './mock-sms.service'
import { ConfigModule } from '@nestjs/config'
import { smsConfigObject } from './sms.config'
import { MockSmsController } from './mock-sms.controller';

@Module({
  imports: [ConfigModule.forFeature(smsConfigObject)],
  providers: [MockSmsService],
  controllers: [MockSmsController]
})
export class MockSmsModule {
}
