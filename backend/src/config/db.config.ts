import { registerAs } from '@nestjs/config'

export class DbConfig {
  host = process.env.DB_HOST || 'localhost'
  dbName = process.env.DB_NAME
  username = process.env.DB_USERNAME
  password = process.env.DB_PASSWORD
  port = process.env.DB_PORT || 5432
  connectionsString = ''

  constructor() {
    this.connectionsString = `postgresql://${this.username}:${this.password}@$${this.host}:${this.port}/${this.dbName}`
  }
}

export const dbConfigObj = registerAs('db', () => new DbConfig())
