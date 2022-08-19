import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email })
    if (!user) return null

    const passwordMatches = await verify(user.password, pass)
    if (passwordMatches) return user
    return null
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id
    }

    return {
      access_token: this.jwtService.sign(payload),
      user
    }
  }
}
