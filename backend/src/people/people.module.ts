import { Module } from '@nestjs/common'
import { PeopleController } from './people.controller'
import { PeopleService } from './people.service'

@Module({
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {
  // A module class can inject providers as well (e.g., for configuration purposes):
  constructor(private peopleService: PeopleService) {
    peopleService.data = ['A', 'B', 'C']
  }
}
