import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTodoInput, UpdateTodoInput } from './todo.dto'
import { Todo } from './todo.schema'
import { TodoService } from './todo.service'

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  async todos() {
    return this.todoService.getTodos()
  }

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.todoService.createTodo(input)
  }

  @Mutation(() => Todo, { nullable: true })
  async updateTodo(@Args('id', { type: () => Int }) id: number, @Args('update') update: UpdateTodoInput) {
    return this.todoService.updateTodo(id, update)
  }

  @Mutation(() => Boolean)
  async deleteTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.deleteTodo(id)
  }
}
