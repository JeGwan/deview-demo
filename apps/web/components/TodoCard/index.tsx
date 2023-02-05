import { useMutation } from '@apollo/client'

import { graphql } from 'lib/gql'
import { Todo } from 'lib/gql/graphql'

import Checkbox from '../Checkbox'
import styles from './TodoCard.module.scss'
import TodoCardTitle from './TodoCardTitle'

const UpdateTodo = graphql(`
  mutation UpdateTodo($id: Int!, $update: UpdateTodoInput!) {
    updateTodo(id: $id, update: $update) {
      id
      title
      description
      completed
      createdDateTime
    }
  }
`)

interface Props {
  todo: Todo
}

const TodoCard = ({ todo }: Props) => {
  const [updateTodo] = useMutation(UpdateTodo)

  const handleChecked = (checked: boolean) => {
    updateTodo({
      variables: {
        id: todo.id,
        update: {
          completed: checked,
        },
      },
    })
  }

  return (
    <li className={styles.todo_card}>
      <TodoCardTitle todo={todo} />
      {todo.description && <div className={styles.todo_desc}>{todo.description}</div>}
      <Checkbox checked={todo.completed} className={styles.todo_check} onChecked={handleChecked} />
    </li>
  )
}

export default TodoCard
