import { useQuery } from '@apollo/client'

import TodoCardList from 'components/TodoCardList'
import { graphql } from 'lib/gql'

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

  if (loading) return <div>loading</div>
  if (error) return <div>error occured</div>

  return (
    <div>
      <h1>Hello</h1>
      <TodoCardList todos={data.todos} />
    </div>
  )
}

export default Index
