import { Resolver } from '@nestjs/graphql'
import { TodoService } from './todo.service'

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
}
