import { Body, Controller, Get, Post } from '@nestjs/common'
import { PeopleService } from './people.service'

@Controller('people')
export class PeopleController {
  constructor(private people: PeopleService) {
  }

  @Get('all')
  all() {
    return this.people.findAll()
  }

  @Post('add')
  add(@Body('name') name: string) {
    return this.people.add(name)
  }
}
