import { Controller, Get } from '@nestjs/common'
import { MockSmsService } from './mock-sms.service'

@Controller('sms')
export class MockSmsController {
  constructor(private service: MockSmsService) {
  }

  @Get()
  index() {
    return this.service.send()
  }
}
