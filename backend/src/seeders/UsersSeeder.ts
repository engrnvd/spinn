import type { EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'
import { User } from '../entities/user.entity'
import { hash } from 'argon2'

export class UsersSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    const password = await hash('apm123*')
    em.create(User, {
      firstName: 'Naveed',
      lastName: 'Hassan',
      email: 'naveed@appmakers.pk',
      password,
    })
  }

}
