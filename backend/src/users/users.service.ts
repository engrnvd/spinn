import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { validateField } from '../utils/crud'
import { hash } from 'argon2'
import type { FilterQuery, Loaded } from '@mikro-orm/core'
import { User } from '../entities/user.entity'
import { wrap } from '@mikro-orm/core'
import { EntityManager } from '@mikro-orm/postgresql'

@Injectable()
export class UsersService {

  constructor(private readonly em: EntityManager) {
  }

  async create(createUserDto: CreateUserDto) {
    const password = await hash(createUserDto.password)
    return this.em.create(User, {
      ...createUserDto,
      password,
    })
  }

  findAll() {
    return this.em.find(User, {})
  }

  async findOne(where: FilterQuery<User>): Promise<Loaded<User>> {
    const user = await this.em.findOne(User, where)
    if (!user) {
      throw new NotFoundException()
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne({ id })
    await wrap(user).assign(updateUserDto)
    await this.em.flush()
  }

  async remove(id: number) {
    const user = await this.findOne({ id })
    return this.em.removeAndFlush(user)
  }

  async updateField(id: number, field: never, value: never) {
    await validateField(UpdateUserDto, field, value)

    const user = await this.findOne({ id })
    user[field] = value
    return this.em.persist(user)
  }
}
