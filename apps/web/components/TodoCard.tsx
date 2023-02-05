import { Todo } from 'lib/gql/graphql'

import Checkbox from './Checkbox'
import styles from './TodoCard.module.scss'

interface Props {
  todo: Todo
}

const TodoCard = ({ todo }: Props) => {
  return (
    <li className={styles.todo_card}>
      <h1 className={styles.todo_title}>{todo.title}</h1>
      {todo.description && <div className={styles.todo_desc}>{todo.description}</div>}
      <Checkbox checked={todo.completed} className={styles.todo_check} />
    </li>
  )
}

export default TodoCard
