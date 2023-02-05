import { useQuery } from '@apollo/client'

import Form from 'components/Form'
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
  const { data, loading, error, refetch: refetchTodos } = useQuery(Todos)

  if (loading) return <main className={styles.main}>loading</main>
  if (!data || error) return <main className={styles.main}>error occured</main>

  return (
    <main className={styles.main}>
      <Form onCreated={refetchTodos} />
      <TodoCardList todos={data.todos} />
    </main>
  )
}

export default Index
