import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
import { LoadStrategy } from '@mikro-orm/core'

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'root',
  dbName: 'test',
  entities: ['dist/entities'],
  entitiesTs: ['src/entities'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
}

export default config
