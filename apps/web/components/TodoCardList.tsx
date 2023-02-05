import { Todo } from 'lib/gql/graphql'

interface Props {
  todos: Todo[]
}

const TodoCardList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoCardList
