import { Injectable } from '@nestjs/common'

@Injectable()
export class SandboxService {
  sleep(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
  }
}
