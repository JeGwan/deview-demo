import { Query, Resolver } from '@nestjs/graphql'
import { Todo } from './todo.schema'
import { TodoService } from './todo.service'

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  async todos() {
    return this.todoService.getTodos()
  }
}
