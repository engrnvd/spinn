import type { Dictionary, EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { MikroOrmSeeder } from '../entities/mikro-orm-seeder.entity'
import { Logger } from '@nestjs/common'
import { UsersSeeder } from './UsersSeeder'

export class DatabaseSeeder extends Seeder {
  private logger = new Logger(DatabaseSeeder.name)

  async run(em: EntityManager): Promise<void> {
    await this.call(em, [
      UsersSeeder,
    ])
  }

  protected async call(em: EntityManager, seeders: { new(): Seeder }[], context?: Dictionary): Promise<void> {
    for (const seeder of seeders) {
      const alreadyRan = await em.findOne(MikroOrmSeeder, { name: seeder.name })
      if (alreadyRan) {
        this.logger.log(`Already ran ${seeder.name}`)
        continue
      }
      this.logger.log(`Running ${seeder.name}`)
      await super.call(em, [seeder], context)
      await em.create(MikroOrmSeeder, { name: seeder.name })
    }
  }
}
