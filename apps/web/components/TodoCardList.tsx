import { Todo } from 'lib/gql/graphql'

import TodoCard from './TodoCard'

interface Props {
  todos: Todo[]
}

const TodoCardList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoCardList
