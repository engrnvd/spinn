import { Entity, Property } from '@mikro-orm/core'
import { BaseEntity } from './base.entity'

@Entity()
export class User extends BaseEntity {
  @Property()
  firstName!: string

  @Property()
  lastName!: string

  @Property()
  email!: string

  @Property()
  password!: string

}
