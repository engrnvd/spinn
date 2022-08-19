import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class MikroOrmSeeder {
  @PrimaryKey()
  name: string

  @Property()
  ranAt: Date = new Date()
}
