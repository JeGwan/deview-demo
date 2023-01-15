import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { GRAPHQL_PATH } from './graphql.constant'

@Module({})
export class AppGraphQLModule {
  static forRootAsync() {
    const phase = process.env.PHASE ?? 'development'
    const isDev = phase === 'development'

    return GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      debug: isDev,
      playground: isDev,
      introspection: true,
      path: GRAPHQL_PATH,
    })
  }
}
