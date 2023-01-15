import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import GraphiQLMiddleware from './graphql/graphiql/graphiql.middleware'
import { GRAPHIQL_PATH, GRAPHQL_PATH } from './graphql/graphql.constant'
import { AppGraphQLModule } from './graphql/graphql.module'
import { PostModule } from './post/post.module'

@Module({
  imports: [AppGraphQLModule.forRootAsync(), PostModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GraphiQLMiddleware({ path: GRAPHQL_PATH })).forRoutes(GRAPHIQL_PATH)
  }
}
