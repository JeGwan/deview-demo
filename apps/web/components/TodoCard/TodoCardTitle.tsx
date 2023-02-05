import { graphql } from 'lib/gql'
import { TodoCardTitle_TodoFragment } from 'lib/gql/graphql'

import styles from './TodoCard.module.scss'

interface Props {
  todo: TodoCardTitle_TodoFragment
}

const TodoCardTitle = ({ todo }: Props) => {
  return <h1 className={styles.todo_title}>{todo.title}</h1>
}

TodoCardTitle.fragments = {
  todo: graphql(`
    fragment TodoCardTitle_Todo on Todo {
      title
    }
  `),
}

export default TodoCardTitle
