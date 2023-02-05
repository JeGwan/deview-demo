import { Todo } from 'lib/gql/graphql'

interface Props {
  todo: Todo
}

const TodoCard = ({ todo }: Props) => {
  return (
    <li>
      <h1>{todo.title}</h1>
      {todo.description && <div>{todo.description}</div>}
    </li>
  )
}

export default TodoCard
