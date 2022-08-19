import { Controller, Get, Inject, Ip, Param, Query } from '@nestjs/common'
import { SandboxService } from './sandbox.service'
import { HMSPipe } from '../pipes/hms.pipe'
import { ConfigService } from '@nestjs/config'
import { DbConfig, dbConfigObj } from '../config/db.config'

@Controller('sandbox')
export class SandboxController {
  constructor(
    private service: SandboxService,
    private config: ConfigService,
    @Inject(dbConfigObj.KEY) private dbConf: DbConfig
  ) {
  }

  // ===== there are two ways to access custom config file =====
  // I think the first one is cleaner
  @Get('config/db')
  dbConfig(): any {
    let dbConf = this.config.get<DbConfig>('db')
    // let host = this.config.get('db.host')
    // let host = conf.host // this gives type hinting ❤
    return { host: dbConf.host, fullConf: dbConf }
  }

  @Get('config/db2')
  dbConfig2(): any {
    return { url: this.dbConf.connectionsString }
  }

  // ===== end accessing custom config file =======

  @Get('config/get/:key')
  getConfig(@Param('key') key: string): any {
    return { key: this.config.get(key) }
  }

  @Get('hms/:s')
  hms(@Param('s', HMSPipe) seconds: string): string {
    return seconds
  }

  @Get('promise')
  async promise(): Promise<string> {
    await this.service.sleep(3)
    return 'served after 3 seconds'
  }

  @Get('colou?r')
  regex(): string {
    return `This route can be accessed as /color or /colour.<br/>
      The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts.<br/>
      The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
`
  }

  @Get('calc-area')
  calculateArea(@Query('l') l: number, @Query('w') w: number): number {
    console.log({ l, w })
    return l * w
  }

  @Get('hello/:n')
  hello(@Param('n') name: string): string {
    return `Hello ${name.toUpperCase()}!`
  }

  @Get('ip')
  myIp(@Ip() ip: string): string {
    return `Your ip is ${ip}`
  }
}
