import { Injectable } from '@nestjs/common'
import { Todo } from './todo.schema'

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, completed: false, createdDateTime: new Date('2023-02-01'), title: '영수증 리뷰 쓰기' },
  ]

  getTodos() {
    return this.todos
  }
}
