import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SMSConfig } from './sms.config'

@Injectable()
export class MockSmsService {
  constructor(private configService: ConfigService) {
  }

  get config() {
    return this.configService.get<SMSConfig>('sms')
  }

  send() {
    return `Sending sms using key: ${this.config.apiKey} to url: ${this.config.url}`
  }
}
