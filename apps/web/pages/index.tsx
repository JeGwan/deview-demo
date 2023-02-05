import { useQuery } from '@apollo/client'

import { graphql } from 'lib/gql'

const Todos = graphql(`
  query Todos {
    todos {
      id
      title
      description
      completed
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
      <ul>
        {data.todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Index
