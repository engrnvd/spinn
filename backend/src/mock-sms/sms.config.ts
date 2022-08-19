import { registerAs } from '@nestjs/config'

export class SMSConfig {
  apiKey = process.env.SMS_API_KEY || 'myownsmskey'
  baseUrl = 'https://api.free-sms-service.com'
  url = ''

  constructor() {
    this.url = `${this.baseUrl}/send`
  }
}

export const smsConfigObject = registerAs('sms', () => new SMSConfig())
