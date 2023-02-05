import { useQuery } from '@apollo/client'

import TodoCardList from 'components/TodoCardList'
import { graphql } from 'lib/gql'

import styles from './index.module.scss'

const Todos = graphql(`
  query Todos {
    todos {
      id
      title
      description
      completed
      createdDateTime
    }
  }
`)

const Index = () => {
  const { data, loading, error } = useQuery(Todos)

  if (loading) return <main className={styles.main}>loading</main>
  if (error) return <main className={styles.main}>error occured</main>

  return (
    <main className={styles.main}>
      <TodoCardList todos={data.todos} />
    </main>
  )
}

export default Index
