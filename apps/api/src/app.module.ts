import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import GraphiQLMiddleware from './graphql/graphiql/graphiql.middleware'
import { GRAPHIQL_PATH, GRAPHQL_PATH } from './graphql/graphql.constant'
import { AppGraphQLModule } from './graphql/graphql.module'
import { PostModule } from './post/post.module'

@Module({
  imports: [AppGraphQLModule.forRootAsync(), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GraphiQLMiddleware({ path: GRAPHQL_PATH })).forRoutes(GRAPHIQL_PATH)
  }
}
