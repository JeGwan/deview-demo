import { Query, Resolver } from '@nestjs/graphql'
import { Post } from './post.schema'
import { PostService } from './post.service'

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  posts() {
    return this.postService.getPosts()
  }
}
