import { Injectable } from '@nestjs/common'
import { CreateTodoInput, UpdateTodoInput } from './todo.dto'
import { Todo } from './todo.schema'

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, completed: false, createdDateTime: new Date('2023-02-01'), title: '영수증 리뷰 쓰기' },
  ]

  getTodos() {
    return this.todos
  }

  createTodo(input: CreateTodoInput): Todo {
    const id = this.todos.length + 1

    const todo: Todo = {
      id,
      ...input,
      completed: false,
      createdDateTime: new Date(),
    }

    this.todos.push(todo)

    return todo
  }

  updateTodo(id: Todo['id'], update: UpdateTodoInput): Todo | null {
    const todoIndex = this.todos.findIndex(todo => todo.id === id)

    const isExist = todoIndex !== -1
    if (!isExist) return null

    return (this.todos[todoIndex] = { ...this.todos[todoIndex], ...update })
  }

  deleteTodo(id: Todo['id']) {
    const todo = this.todos.find(todo => todo.id === id)
    if (!todo) return false

    this.todos = this.todos.filter(todo => todo.id !== id)
    return true
  }
}
