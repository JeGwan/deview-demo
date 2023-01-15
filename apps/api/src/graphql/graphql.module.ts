import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { IS_DEV } from 'utils'
import { GRAPHQL_PATH } from './graphql.constant'

@Module({})
export class AppGraphQLModule {
  static forRootAsync() {
    return GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      debug: IS_DEV,
      playground: IS_DEV,
      introspection: true,
      path: GRAPHQL_PATH,
      cors: {
        credentials: true,
        origin: /localhost/,
      },
    })
  }
}
