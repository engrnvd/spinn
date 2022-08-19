import { Injectable } from '@nestjs/common'

@Injectable()
export class PeopleService {
  public data: string[] = []

  findAll(): string[] {
    return this.data
  }

  add(name: string) {
    this.data.push(name)
  }
}
