import { Todo } from 'lib/gql/graphql'

import TodoCard from './TodoCard'
import styles from './TodoCardList.module.scss'

interface Props {
  todos: Todo[]
}

const TodoCardList = ({ todos }: Props) => {
  return (
    <ul className={styles.todo_card_list}>
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoCardList
